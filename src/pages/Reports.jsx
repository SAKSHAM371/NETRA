import {
  ArrowLeft,
  Download,
  FileText,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Reports() {
  const navigate = useNavigate();

  const reports = [
    ["REP-2042", "Patient #RC-1042", "High Risk", "Today"],
    ["REP-2041", "Patient #RC-1041", "Low Risk", "Today"],
    ["REP-2040", "Patient #RC-1040", "Moderate Risk", "Yesterday"],
    ["REP-2039", "Patient #RC-1039", "Low Risk", "Yesterday"],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="flex items-center justify-between border-b border-slate-800 px-5 py-5 lg:px-10">

        <div>
          <p className="text-sm text-slate-500">
            RetinaCare AI
          </p>
          <h1 className="text-2xl font-bold">
            Reports
          </h1>
        </div>

        <button
          onClick={() => navigate("/user-dashboard")}
          className="flex items-center gap-2 rounded-xl border border-slate-800 px-4 py-2 text-sm text-slate-400 hover:bg-slate-900 hover:text-white"
        >
          <ArrowLeft size={17} />
          Dashboard
        </button>

      </header>

      <main className="mx-auto max-w-6xl p-5 lg:p-10">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Screening Reports
          </h2>

          <p className="mt-2 text-slate-500">
            Download and review generated screening reports.
          </p>
        </div>

        <div className="mb-6 relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
          />

          <input
            placeholder="Search reports..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-sm outline-none focus:border-cyan-400"
          />
        </div>

        <div className="space-y-3">

          {reports.map((report) => (
            <div
              key={report[0]}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:flex-row sm:items-center sm:justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FileText size={22} />
                </div>

                <div>
                  <p className="font-medium">
                    {report[0]}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {report[1]} • {report[3]}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                  {report[2]}
                </span>

                <button className="flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                  <Download size={16} />
                  Download
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default Reports;