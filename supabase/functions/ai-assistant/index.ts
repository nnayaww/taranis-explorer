// Import from a more recent version of Deno standard library
import { serve } from "https://deno.land/std@0.216.0/http/server.ts";
// Import XHR for Deno compatibility
import "https://deno.land/x/xhr@0.3.1/mod.ts";

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Define the OpenAI API response interface
interface OpenAIResponse {
  choices?: Array<{
    message?: {
      content: string;
    };
  }>;
  error?: {
    code: string;
    message: string;
  };
}

// Main server function
serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the request body
    const { message } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error("OpenAI API key is not configured");
    }

    // Send request to OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'You are TaranisAI, an agricultural intelligence assistant specialized in helping farmers and agronomists. Your expertise includes crop monitoring, disease detection, yield prediction, and agricultural technology. Keep responses concise, practical, and focused on agricultural topics. When you don\'t know something, admit it rather than making up information. Use a friendly, professional tone.' 
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data: OpenAIResponse = await response.json();

    // Handle API errors
    if (!response.ok) {
      console.error('OpenAI API error:', data);
      
      // Check specifically for quota exceeded error
      if (data?.error?.code === "insufficient_quota") {
        return new Response(JSON.stringify({ 
          error: "The AI service is currently unavailable due to API quota limits. Please try again later or contact support to upgrade the API plan." 
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`OpenAI API returned ${response.status}: ${JSON.stringify(data.error)}`);
    }
    
    // Validate response structure
    if (!data || !data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response structure from OpenAI API");
    }
    
    const aiResponse = data.choices[0].message.content;

    // Return successful response
    return new Response(JSON.stringify({ 
      response: aiResponse 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in AI assistant function:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'An error occurred while processing your request' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});