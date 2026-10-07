import {
  Activity,
  ArrowLeft,
  Brain,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Analytics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-5 py-5 lg:px-10">
        <button
          onClick={() => navigate("/admin-dashboard")}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Dashboard
        </button>
      </header>

      <main className="mx-auto max-w-7xl p-5 py-10 lg:p-10">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Brain className="text-cyan-400" size={28} />

            <div>
              <h1 className="text-3xl font-bold">
                AI Analytics
              </h1>

              <p className="text-sm text-slate-500">
                AI screening performance and system insights.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <Metric title="AI Accuracy" value="96.4%" />
          <Metric title="Total Predictions" value="1,284" />
          <Metric title="Avg. Confidence" value="91.7%" />
          <Metric title="Processing Time" value="18s" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ChartCard title="Prediction Accuracy">
            <div className="flex h-64 items-end gap-4">
              {[55, 70, 64, 82, 78, 91, 96].map((height, i) => (
                <div key={i} className="flex h-full flex-1 items-end">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t-lg bg-cyan-400/70"
                  />
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Screening Activity">
            <div className="flex h-64 items-end gap-4">
              {[40, 52, 47, 68, 59, 80, 72].map((height, i) => (
                <div key={i} className="flex h-full flex-1 items-end">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full rounded-t-lg bg-blue-400/70"
                  />
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-emerald-400" />
            <div>
              <h2 className="font-semibold">
                Performance Insight
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                AI model performance is trending positively.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
            <Activity size={17} className="text-cyan-400" />
            Screening accuracy improved by 4.8% this month.
          </div>
        </div>
      </main>
    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h2 className="mb-8 font-semibold">{title}</h2>
      {children}
    </div>
  );
}

export default Analytics;