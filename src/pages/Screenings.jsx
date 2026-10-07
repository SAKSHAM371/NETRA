import {
  ArrowLeft,
  Download,
  Eye,
  FileImage,
  Filter,
  Search,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Screenings() {
  const navigate = useNavigate();

  const screenings = [
    ["RC-1042", "Rahul Sharma", "Today, 10:42 AM", "High Risk"],
    ["RC-1041", "Aman Verma", "Today, 09:30 AM", "Low Risk"],
    ["RC-1040", "Priya Singh", "Yesterday, 04:20 PM", "Moderate Risk"],
    ["RC-1039", "Neha Gupta", "Yesterday, 02:10 PM", "Low Risk"],
    ["RC-1038", "Vikas Kumar", "Yesterday, 11:45 AM", "High Risk"],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between border-b border-slate-800 px-5 py-5 lg:px-10">
        <div>
          <p className="text-sm text-slate-500">RetinaCare AI</p>
          <h1 className="text-2xl font-bold">Screenings</h1>
        </div>

        <button
          onClick={() => navigate("/user-dashboard")}
          className="flex items-center gap-2 rounded-xl border border-slate-800 px-4 py-2 text-sm text-slate-400 hover:bg-slate-900 hover:text-white"
        >
          <ArrowLeft size={17} />
          Dashboard
        </button>
      </header>

      <main className="mx-auto max-w-7xl p-5 lg:p-10">

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">Screening History</h2>
            <p className="mt-2 text-slate-500">
              Review all retinal screening results.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            <Upload size={18} />
            New Screening
          </button>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
            />
            <input
              placeholder="Search patient or screening ID..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-sm outline-none focus:border-cyan-400"
            />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 px-5 py-3 text-sm text-slate-400 hover:bg-slate-900">
            <Filter size={17} />
            Filter
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left">
              <thead className="border-b border-slate-800 bg-slate-950">
                <tr className="text-xs uppercase tracking-wider text-slate-600">
                  <th className="px-6 py-4">Screening</th>
                  <th className="px-6 py-4">Patient</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Risk</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800">
                {screenings.map((item) => (
                  <tr key={item[0]} className="hover:bg-slate-900">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                          <FileImage size={19} />
                        </div>
                        <span className="font-medium">{item[0]}</span>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-300">
                      {item[1]}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {item[2]}
                    </td>

                    <td className="px-6 py-5">
                      <RiskBadge risk={item[3]} />
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-cyan-400">
                          <Eye size={18} />
                        </button>

                        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-cyan-400">
                          <Download size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

function RiskBadge({ risk }) {
  const style =
    risk === "High Risk"
      ? "bg-red-400/10 text-red-400"
      : risk === "Moderate Risk"
      ? "bg-amber-400/10 text-amber-400"
      : "bg-emerald-400/10 text-emerald-400";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${style}`}>
      {risk}
    </span>
  );
}

export default Screenings;