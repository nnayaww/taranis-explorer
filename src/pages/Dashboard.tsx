import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Cloud, Sun, CloudRain, Wind, AlertTriangle, CheckCircle, TrendingUp, Leaf } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Generate mock health trend data for the past 30 days
const generateTrendData = () => {
  const data = [];
  const start = new Date("2025-03-04");
  for (let i = 0; i < 30; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    const label = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    data.push({
      date: label,
      score: Math.floor(65 + Math.random() * 30),
    });
  }
  // Fix last value to match current health score
  data[data.length - 1].score = 95;
  return data;
};

const trendData = generateTrendData();

const diseases = [
  { name: "Powdery Mildew", percentage: 12, color: "bg-red-500" },
  { name: "Nutrient Deficiency", percentage: 8, color: "bg-yellow-400" },
  { name: "Leaf Blight", percentage: 5, color: "bg-orange-400" },
];

const weather = [
  { day: "Today", date: "Mar 23, 2026", icon: Sun, temp: "28°C", condition: "Sunny" },
  { day: "Tomorrow", date: "Mar 24, 2026", icon: Cloud, temp: "24°C", condition: "Cloudy" },
  { day: "Saturday", date: "Mar 25, 2026", icon: CloudRain, temp: "21°C", condition: "Rain" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3">
        <p className="text-sm font-semibold text-gray-700">{label}</p>
        <p className="text-sm text-green-600 font-bold">Health Score: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const healthScore = 95;

  const healthColor = (s: number) =>
    s >= 75 ? "text-green-600" : s >= 50 ? "text-yellow-500" : "text-red-500";

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-green-100 rounded-full p-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Farm Dashboard</h1>
            <p className="text-gray-500 text-sm">Real-time crop health monitoring and insights</p>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <h2 className="font-bold text-gray-900 mb-1">Crop Health Trends</h2>
          <p className="text-sm text-gray-400 mb-6">Health scores over time</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={trendData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#9ca3af" }} tickLine={false} axisLine={false}
                interval={3} />
              <YAxis domain={[0, 100]} tickFormatter={v => `${v}%`} tick={{ fontSize: 11, fill: "#9ca3af" }}
                tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2.5}
                fill="url(#healthGradient)" dot={false} activeDot={{ r: 5, fill: "#10b981" }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Stats row */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Health Score */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-1">
              <Leaf className="h-5 w-5 text-green-500" />
              <h2 className="font-bold text-gray-900">Crop Health Score</h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">Based on recent analysis</p>
            <p className={`text-5xl font-extrabold mb-3 ${healthColor(healthScore)}`}>{healthScore}%</p>
            <Progress value={healthScore} className="h-2 mb-3" />
            <div className="flex items-center gap-1.5 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span>Excellent condition</span>
            </div>
          </div>

          {/* Disease Detection */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <h2 className="font-bold text-gray-900">Disease Detection</h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">Last 7 days</p>
            <div className="space-y-4">
              {diseases.map((d, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${d.color}`} />
                      <span className="text-sm text-gray-700">{d.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{d.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className={`h-1.5 rounded-full ${d.color}`} style={{ width: `${d.percentage * 4}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Forecast */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-1">
              <Wind className="h-5 w-5 text-blue-400" />
              <h2 className="font-bold text-gray-900">Weather Forecast</h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">Next 3 days</p>
            <div className="space-y-4">
              {weather.map((w, i) => {
                const Icon = w.icon;
                return (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{w.day}</p>
                      <p className="text-xs text-gray-400">{w.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-bold text-gray-700">{w.temp}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-900 mb-1">Recommendations</h2>
          <p className="text-sm text-gray-400 mb-4">Suggested actions based on current crop health</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Apply fungicide", desc: "Treat powdery mildew within the next 3–5 days.", color: "border-red-200 bg-red-50", icon: "🍄" },
              { title: "Soil testing", desc: "Confirm nutrient deficiencies with a soil test.", color: "border-yellow-200 bg-yellow-50", icon: "🧪" },
              { title: "Increase nitrogen", desc: "Apply nitrogen fertilizer following manufacturer guidelines.", color: "border-green-200 bg-green-50", icon: "🌱" },
              { title: "Monitor daily", desc: "Check affected areas daily and report significant changes.", color: "border-blue-200 bg-blue-50", icon: "👁️" },
              { title: "Irrigation check", desc: "Ensure consistent watering given upcoming cloudy weather.", color: "border-purple-200 bg-purple-50", icon: "💧" },
              { title: "Pest scouting", desc: "Scout for pests after rain forecast on Saturday.", color: "border-orange-200 bg-orange-50", icon: "🔍" },
            ].map((r, i) => (
              <div key={i} className={`rounded-xl border p-4 ${r.color}`}>
                <div className="text-2xl mb-2">{r.icon}</div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{r.title}</h3>
                <p className="text-xs text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
