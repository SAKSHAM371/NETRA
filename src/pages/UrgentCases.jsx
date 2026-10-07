import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function UrgentCases() {
  const navigate = useNavigate();

  const cases = [
    ["RC-1042", "Patient #1042", "94%", "12 min ago"],
    ["RC-1037", "Patient #1037", "91%", "38 min ago"],
    ["RC-1029", "Patient #1029", "88%", "1 hr ago"],
    ["RC-1021", "Patient #1021", "86%", "2 hrs ago"],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-5 py-5 lg:px-10">
        <button
          onClick={() => navigate("/admin-dashboard")}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Admin Dashboard
        </button>
      </header>

      <main className="mx-auto max-w-6xl p-5 py-10 lg:p-10">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400/10 text-red-400">
              <AlertTriangle size={24} />
            </div>

            <div>
              <h1 className="text-3xl font-bold">Urgent Cases</h1>
              <p className="text-sm text-slate-500">
                Cases requiring immediate clinical review.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {cases.map((item) => (
            <div
              key={item[0]}
              className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400/10 text-red-400">
                  <AlertTriangle size={21} />
                </div>

                <div>
                  <p className="font-semibold">{item[1]}</p>

                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-600">
                    <span>{item[0]}</span>
                    <span className="flex items-center gap-1">
                      <Clock3 size={12} />
                      {item[3]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 sm:justify-end">
                <span className="font-bold text-red-400">
                  {item[2]}
                </span>

                <button className="flex items-center gap-2 rounded-xl border border-slate-800 px-4 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                  <Eye size={17} />
                  Review
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default UrgentCases;