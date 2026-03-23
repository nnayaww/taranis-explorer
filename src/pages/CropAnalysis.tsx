import { useState } from "react";
import { Clock, ArrowLeft, Trash2, AlertTriangle, CheckCircle, Leaf, Loader2, Send, Sprout, Bug, BarChart3, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface DetectedIssue {
  name: string;
  description: string;
  confidence: number;
  severity: "low" | "medium" | "high";
}

interface AnalysisResult {
  id: string;
  query: string;
  healthScore: number;
  healthSummary: string;
  issues: DetectedIssue[];
  recommendations: string[];
  timestamp: Date;
}

const QUICK_PROMPTS = [
  { icon: Bug, label: "Disease Detection", prompt: "My tomato leaves have yellow spots with brown edges and are curling. What disease is this and how do I treat it?" },
  { icon: Droplets, label: "Irrigation", prompt: "My corn crop leaves are wilting in the morning but recover by evening. Is this a watering issue?" },
  { icon: BarChart3, label: "Yield Optimization", prompt: "What steps can I take to maximize my maize yield this season?" },
  { icon: Sprout, label: "Soil Health", prompt: "My crops are growing slowly and leaves are pale green. Could this be a soil nutrient issue?" },
];

const ANALYSIS_PROMPT = (desc: string) =>
  `A farmer describes this crop issue: "${desc}". Analyze it and respond ONLY with a JSON object in this exact format:
{
  "healthScore": <number 0-100>,
  "healthSummary": "<one sentence summary>",
  "issues": [
    { "name": "<issue>", "description": "<brief description>", "confidence": <0-100>, "severity": "<low|medium|high>" }
  ],
  "recommendations": ["<action 1>", "<action 2>", "<action 3>", "<action 4>"]
}`;

const parseAnalysis = (raw: string, query: string): AnalysisResult => {
  try {
    const match = raw.match(/```json\n?([\s\S]*?)\n?```/) || raw.match(/(\{[\s\S]*\})/);
    if (match) {
      const parsed = JSON.parse(match[1]);
      return {
        id: crypto.randomUUID(),
        query,
        healthScore: parsed.healthScore ?? 50,
        healthSummary: parsed.healthSummary ?? "",
        issues: parsed.issues ?? [],
        recommendations: parsed.recommendations ?? [],
        timestamp: new Date(),
      };
    }
  } catch (_) { /* fall through */ }
  return {
    id: crypto.randomUUID(),
    query,
    healthScore: 50,
    healthSummary: "Analysis complete.",
    issues: [],
    recommendations: [raw],
    timestamp: new Date(),
  };
};

export default function CropAnalysis() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentResult, setCurrentResult] = useState<AnalysisResult | null>(null);
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [view, setView] = useState<"main" | "detail">("main");
  const [detailItem, setDetailItem] = useState<AnalysisResult | null>(null);

  const analyze = async (text: string) => {
    if (!text.trim() || isAnalyzing) return;
    setIsAnalyzing(true);
    setCurrentResult(null);
    setInput("");

    try {
      const { data, error } = await supabase.functions.invoke("ai-assistant", {
        body: { message: ANALYSIS_PROMPT(text) },
      });
      if (error) throw new Error(error.message);
      if (data?.error) throw new Error(data.error);

      const result = parseAnalysis(data.response, text);
      setCurrentResult(result);
      setHistory(prev => [result, ...prev]);
    } catch (err: unknown) {
      toast({ title: "Analysis failed", description: err instanceof Error ? err.message : "Unknown error", variant: "destructive" });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const healthColor = (s: number) => s >= 75 ? "text-green-600" : s >= 50 ? "text-yellow-500" : "text-red-500";
  const severityIcon = (s: string) =>
    s === "high" ? <AlertTriangle className="h-4 w-4 text-red-500" /> :
    s === "medium" ? <AlertTriangle className="h-4 w-4 text-yellow-500" /> :
    <CheckCircle className="h-4 w-4 text-green-500" />;
  const confidenceColor = (c: number) => c >= 75 ? "bg-red-400" : c >= 50 ? "bg-yellow-400" : "bg-green-400";

  const ResultCard = ({ result }: { result: AnalysisResult }) => (
    <div className="space-y-5">
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-600">Health Score</span>
          <span className={`text-3xl font-extrabold ${healthColor(result.healthScore)}`}>{result.healthScore}%</span>
        </div>
        <Progress value={result.healthScore} className="h-2 mb-2" />
        <p className="text-sm text-gray-500">{result.healthSummary}</p>
      </div>

      {result.issues.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Detected Issues</h3>
          <div className="space-y-4">
            {result.issues.map((issue, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  {severityIcon(issue.severity)}
                  <span className="text-sm font-semibold text-gray-800">{issue.name}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2 ml-6">{issue.description}</p>
                <div className="flex items-center gap-3 ml-6">
                  <span className="text-xs text-gray-400">Confidence</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${confidenceColor(issue.confidence)}`} style={{ width: `${issue.confidence}%` }} />
                  </div>
                  <span className="text-xs font-semibold text-gray-600">{issue.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Recommendations</h3>
        <ul className="space-y-1.5">
          {result.recommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-green-500 mt-0.5">•</span> {rec}
            </li>
          ))}
        </ul>
      </div>

      <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full" onClick={() => { setDetailItem(result); setView("detail"); }}>
        View Full Details
      </Button>
    </div>
  );

  if (view === "detail" && detailItem) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <button onClick={() => setView("main")} className="flex items-center text-sm text-gray-500 hover:text-gray-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Analysis
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Analysis Details</h2>
          <p className="text-sm text-gray-400 mb-2 flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {detailItem.timestamp.toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}
          </p>
          <p className="text-sm text-gray-500 italic mb-6">"{detailItem.query}"</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="bg-green-50 rounded-xl p-6 flex items-center justify-center mb-4">
                <Leaf className="h-16 w-16 text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Health Score</h3>
              <p className={`text-4xl font-extrabold ${healthColor(detailItem.healthScore)}`}>{detailItem.healthScore}%</p>
              <Progress value={detailItem.healthScore} className="mt-2 mb-3 h-2" />
              <p className="text-sm text-gray-500">{detailItem.healthSummary}</p>
              <Button variant="destructive" size="sm" className="w-full mt-4" onClick={() => { setHistory(prev => prev.filter(h => h.id !== detailItem.id)); setView("main"); }}>
                <Trash2 className="h-4 w-4 mr-1" /> Delete
              </Button>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">Detected Issues</h3>
                <p className="text-sm text-gray-400 mb-4">Problems identified in your crop</p>
                {detailItem.issues.length === 0 ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">No issues detected — crop looks healthy!</span>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {detailItem.issues.map((issue, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2 mb-1">
                          {severityIcon(issue.severity)}
                          <span className="font-semibold text-gray-800">{issue.name}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{issue.description}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400">Confidence</span>
                          <div className="flex-1 bg-gray-100 rounded-full h-2">
                            <div className={`h-2 rounded-full ${confidenceColor(issue.confidence)}`} style={{ width: `${issue.confidence}%` }} />
                          </div>
                          <span className="text-xs font-semibold text-gray-600">{issue.confidence}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-1">Recommendations</h3>
                <p className="text-sm text-gray-400 mb-4">Suggested actions to improve crop health</p>
                <ul className="space-y-2">
                  {detailItem.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5">•</span> {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-green-100 rounded-full p-2">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">AI Crop Analyzer</h1>
          </div>
          <p className="text-gray-500">Describe your crop condition for AI-powered analysis and recommendations</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Input card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-1">Describe Your Crop Issue</h2>
              <p className="text-sm text-gray-400 mb-4">Provide details about symptoms, affected areas, and crop type</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {QUICK_PROMPTS.map(({ icon: Icon, label, prompt }) => (
                  <button key={label} onClick={() => analyze(prompt)}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all text-center">
                    <div className="bg-green-100 rounded-full p-1.5"><Icon className="h-4 w-4 text-green-600" /></div>
                    <span className="text-xs font-medium text-gray-600">{label}</span>
                  </button>
                ))}
              </div>

              <Textarea
                placeholder="e.g. My maize leaves are turning yellow from the tips, and I notice small brown spots on the lower leaves..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={isAnalyzing}
                rows={4}
                className="resize-none mb-3"
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); analyze(input); } }}
              />
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Press Enter to analyze</span>
                <Button onClick={() => analyze(input)} disabled={isAnalyzing || !input.trim()} className="bg-green-600 hover:bg-green-700">
                  {isAnalyzing ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : <Send className="h-4 w-4 mr-1" />}
                  Analyze
                </Button>
              </div>
            </div>

            {/* Results card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-1">Analysis Results</h2>
              <p className="text-sm text-gray-400 mb-4">AI-powered insights from your crop description</p>

              {isAnalyzing && (
                <div className="flex flex-col items-center py-12 text-gray-500">
                  <Loader2 className="h-10 w-10 animate-spin text-green-500 mb-3" />
                  <p className="text-sm">Analyzing your crop...</p>
                </div>
              )}
              {!isAnalyzing && !currentResult && (
                <div className="flex flex-col items-center py-12 text-gray-400">
                  <Leaf className="h-10 w-10 mb-3" />
                  <p className="text-sm">Describe your crop issue above to see results</p>
                </div>
              )}
              {!isAnalyzing && currentResult && <ResultCard result={currentResult} />}
            </div>
          </div>

          {/* History */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit">
            <h2 className="font-bold text-gray-900 mb-1">Analysis History</h2>
            <p className="text-sm text-gray-400 mb-4">Previous crop analyses</p>
            {history.length === 0 ? (
              <div className="flex flex-col items-center py-10 text-gray-400">
                <Clock className="h-10 w-10 mb-3" />
                <p className="text-sm text-center">No analysis history yet</p>
                <p className="text-xs text-center mt-1">Analyze crop issues to see results here</p>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map(item => (
                  <div key={item.id} onClick={() => { setDetailItem(item); setView("detail"); }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer group border border-gray-100">
                    <div className={`rounded-full p-1.5 flex-shrink-0 ${item.healthScore >= 75 ? "bg-green-100" : item.healthScore >= 50 ? "bg-yellow-100" : "bg-red-100"}`}>
                      <Leaf className={`h-4 w-4 ${healthColor(item.healthScore)}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${healthColor(item.healthScore)}`}>{item.healthScore}% Health</p>
                      <p className="text-xs text-gray-400 truncate">{item.query}</p>
                      <p className="text-xs text-gray-300">{item.timestamp.toLocaleDateString()}</p>
                    </div>
                    <button onClick={e => { e.stopPropagation(); setHistory(prev => prev.filter(h => h.id !== item.id)); }}
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity flex-shrink-0">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
