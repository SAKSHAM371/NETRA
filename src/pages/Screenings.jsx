import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  Plus,
  Search,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Screenings() {
  const navigate = useNavigate();

  const screenings = [
    {
      id: "SCR-2048",
      date: "07 Oct 2026",
      eye: "Both Eyes",
      result: "No Diabetic Retinopathy",
      risk: "Low",
      status: "Healthy",
    },
    {
      id: "SCR-2047",
      date: "06 Oct 2026",
      eye: "Both Eyes",
      result: "Mild Diabetic Retinopathy",
      risk: "Medium",
      status: "Monitoring",
    },
    {
      id: "SCR-2046",
      date: "05 Oct 2026",
      eye: "Both Eyes",
      result: "Moderate Diabetic Retinopathy",
      risk: "Medium",
      status: "Monitoring",
    },
    {
      id: "SCR-2045",
      date: "02 Oct 2026",
      eye: "Both Eyes",
      result: "Severe Diabetic Retinopathy",
      risk: "High",
      status: "Urgent",
    },
  ];

  const getRiskStyle = (risk) => {
    if (risk === "Low") {
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }

    if (risk === "Medium") {
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    }

    return "bg-red-500/10 text-red-400 border-red-500/20";
  };

  const getStatusStyle = (status) => {
    if (status === "Healthy") {
      return "bg-emerald-500/10 text-emerald-400";
    }

    if (status === "Monitoring") {
      return "bg-amber-500/10 text-amber-400";
    }

    return "bg-red-500/10 text-red-400";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/user-dashboard")}
                className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft size={20} />
              </button>

              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  My Screenings
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  View and manage your retinal screening history
                </p>
              </div>
            </div>
          </div>

          {/* IMPORTANT: New Screening navigation */}
          <Link
            to="/upload-screening"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            <Plus size={19} />
            New Screening
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <FileText size={21} />
              </div>

              <span className="text-xs text-slate-500">All time</span>
            </div>

            <p className="text-sm text-slate-400">Total Screenings</p>
            <h2 className="mt-1 text-3xl font-bold">24</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
                <CheckCircle2 size={21} />
              </div>
            </div>

            <p className="text-sm text-slate-400">Normal Results</p>
            <h2 className="mt-1 text-3xl font-bold">18</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-amber-500/10 p-3 text-amber-400">
                <Clock3 size={21} />
              </div>
            </div>

            <p className="text-sm text-slate-400">Need Monitoring</p>
            <h2 className="mt-1 text-3xl font-bold">4</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-red-500/10 p-3 text-red-400">
                <TriangleAlert size={21} />
              </div>
            </div>

            <p className="text-sm text-slate-400">Urgent Cases</p>
            <h2 className="mt-1 text-3xl font-bold">2</h2>
          </div>
        </div>

        {/* Screening history */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.04]">
          <div className="flex flex-col gap-4 border-b border-white/10 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Screening History</h2>
              <p className="mt-1 text-sm text-slate-400">
                Your previous retinal screening results
              </p>
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search screenings..."
                className="w-full rounded-xl border border-white/10 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500/50"
              />
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4 font-medium">Screening ID</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Eye</th>
                  <th className="px-6 py-4 font-medium">Result</th>
                  <th className="px-6 py-4 font-medium">Risk</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 text-right font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {screenings.map((screening) => (
                  <tr
                    key={screening.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.03]"
                  >
                    <td className="px-6 py-5">
                      <span className="font-semibold text-white">
                        {screening.id}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <CalendarDays size={16} className="text-slate-500" />
                        {screening.date}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-300">
                      {screening.eye}
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-sm text-slate-200">
                        {screening.result}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${getRiskStyle(
                          screening.risk
                        )}`}
                      >
                        {screening.risk}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          screening.status
                        )}`}
                      >
                        {screening.status}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-right">
                      <Link
                        to={`/screenings/${screening.id}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
                      >
                        <Eye size={15} />
                        View Details
                        <ArrowUpRight size={14} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-4 p-4 md:hidden">
            {screenings.map((screening) => (
              <div
                key={screening.id}
                className="rounded-xl border border-white/10 bg-slate-900/60 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold">{screening.id}</p>

                    <p className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                      <CalendarDays size={13} />
                      {screening.date}
                    </p>
                  </div>

                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${getRiskStyle(
                      screening.risk
                    )}`}
                  >
                    {screening.risk}
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-slate-300">
                    <span className="text-slate-500">Eye: </span>
                    {screening.eye}
                  </p>

                  <p className="text-sm text-slate-300">
                    <span className="text-slate-500">Result: </span>
                    {screening.result}
                  </p>

                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                      screening.status
                    )}`}
                  >
                    {screening.status}
                  </span>
                </div>

                <Link
                  to={`/screenings/${screening.id}`}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2.5 text-sm font-medium transition hover:bg-white/10"
                >
                  <Eye size={16} />
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* New screening CTA */}
        <section className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-6">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3 className="font-semibold">Need a new screening?</h3>
                <p className="mt-1 max-w-xl text-sm text-slate-400">
                  Upload retinal images and get an AI-assisted screening
                  assessment.
                </p>
              </div>
            </div>

            <Link
              to="/upload-screening"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Plus size={18} />
              Start New Screening
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Screenings;