import { serve } from "https://deno.land/std@0.216.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const groqApiKey = Deno.env.get('GROQ_API_KEY');

    if (!groqApiKey) throw new Error("Groq API key is not configured");

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'You are FarmSphere, an agricultural intelligence assistant specialized in helping farmers and agronomists. Your expertise includes crop monitoring, disease detection, yield prediction, and agricultural technology. Keep responses concise, practical, and focused on agricultural topics. Use a friendly, professional tone.'
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 600,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(`Groq API error: ${JSON.stringify(data.error)}`);

    const aiResponse = data.choices?.[0]?.message?.content;
    if (!aiResponse) throw new Error("Invalid response from Groq API");

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'An error occurred' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
