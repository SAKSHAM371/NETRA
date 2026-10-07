import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  Download,
  FileImage,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ScreeningDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-5 py-5 lg:px-10">
        <button
          onClick={() => navigate("/screenings")}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Screenings
        </button>
      </header>

      <main className="mx-auto max-w-6xl p-5 py-10 lg:p-10">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-cyan-400">Screening Report</p>
            <h1 className="mt-2 text-3xl font-bold">
              Screening #RC-1042
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Patient screening analysis and AI assessment
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 px-5 py-3 text-sm text-slate-300 hover:bg-slate-900">
            <Download size={17} />
            Download Report
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="mb-5 font-semibold">Retinal Image</h2>

            <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-950">
              <div className="text-center">
                <FileImage
                  size={55}
                  className="mx-auto text-slate-700"
                />
                <p className="mt-4 text-sm text-slate-500">
                  Retinal image preview
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-400/10 text-red-400">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">Risk Level</p>
                  <h2 className="text-2xl font-bold text-red-400">
                    High Risk
                  </h2>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-500">AI confidence</span>
                  <span>94%</span>
                </div>

                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-full w-[94%] rounded-full bg-red-400" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-5 flex items-center gap-3">
                <Brain className="text-cyan-400" />
                <h2 className="font-semibold">AI Assessment</h2>
              </div>

              <div className="space-y-3">
                <Result label="Image Quality" value="Good" />
                <Result label="DR Severity" value="High" />
                <Result label="Confidence" value="94%" />
                <Result label="Review Status" value="Requires Review" />
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">
              <div className="flex gap-3">
                <Sparkles className="shrink-0 text-cyan-400" />

                <div>
                  <h3 className="font-semibold text-cyan-300">
                    AI Recommendation
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    This screening has been flagged for clinical review.
                    Further evaluation by a qualified healthcare professional
                    is recommended.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle2 size={14} />
              Analysis completed successfully
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Result({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

export default ScreeningDetails;