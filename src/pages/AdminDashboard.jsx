import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Bell,
  Brain,
  CheckCircle2,
  Clock3,
  FileImage,
  LogOut,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const Sidebar = () => (
    <div className="flex h-full flex-col">

      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
          <ShieldCheck size={24} className="text-cyan-400" />
        </div>

        <div>
          <h1 className="text-lg font-bold">
            RetinaCare
          </h1>

          <p className="text-xs text-slate-500">
            Admin Portal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        <button
          onClick={() => goTo("/admin-dashboard")}
          className="flex w-full items-center gap-3 rounded-xl bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-400"
        >
          <Activity size={18} />
          Dashboard
        </button>

        <button
          onClick={() => goTo("/screenings")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <FileImage size={18} />
          Screenings
        </button>

        <button
          onClick={() => goTo("/patients")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <Users size={18} />
          Patients
        </button>

        <button
          onClick={() => goTo("/urgent-cases")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <AlertTriangle size={18} />
          Urgent Cases
        </button>

        <button
          onClick={() => goTo("/analytics")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <Brain size={18} />
          AI Analytics
        </button>
      </nav>

      {/* Logout */}
      <div className="mt-auto border-t border-slate-800 pt-5">
        <button
          onClick={() => goTo("/login")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-slate-800 bg-slate-950 p-5 lg:block">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="lg:ml-64">
        <div className="mx-auto max-w-7xl p-5 sm:p-7 lg:p-9">

          {/* Header */}
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="mb-2 text-sm font-medium text-cyan-400">
                Admin Overview
              </p>

              <h2 className="text-3xl font-bold">
                Screening Dashboard
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Monitor patients, screening activity and AI insights.
              </p>
            </div>

            <button className="relative w-fit rounded-xl border border-slate-800 bg-slate-900 p-3 text-slate-400">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Users size={22} />
                </div>

                <span className="text-xs text-emerald-400">
                  +12%
                </span>
              </div>

              <p className="text-sm text-slate-400">
                Total Patients
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                1,248
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl bg-violet-400/10 p-3 text-violet-400">
                  <FileImage size={22} />
                </div>

                <span className="text-xs text-emerald-400">
                  +18%
                </span>
              </div>

              <p className="text-sm text-slate-400">
                Total Screenings
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                3,482
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl bg-amber-400/10 p-3 text-amber-400">
                  <AlertCircle size={22} />
                </div>

                <span className="text-xs text-amber-400">
                  Monitor
                </span>
              </div>

              <p className="text-sm text-slate-400">
                Medium Risk
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                186
              </h3>
            </div>

            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl bg-red-400/10 p-3 text-red-400">
                  <AlertTriangle size={22} />
                </div>

                <span className="text-xs text-red-400">
                  Urgent
                </span>
              </div>

              <p className="text-sm text-slate-400">
                High Risk Cases
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                27
              </h3>
            </div>
          </div>

          {/* Charts */}
          <div className="grid gap-7 xl:grid-cols-3">

            {/* Trend */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 xl:col-span-2">

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Screening Trend
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Screening activity over the last 7 days
                  </p>
                </div>

                <span className="rounded-lg bg-slate-800 px-3 py-2 text-xs text-slate-400">
                  Last 7 Days
                </span>
              </div>

              <div className="flex h-64 items-end gap-4">
                {[48, 62, 55, 72, 67, 84, 92].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 flex-col items-center gap-3"
                    >
                      <div className="flex h-full w-full items-end">
                        <div
                          className="w-full rounded-t-xl bg-cyan-400/70 transition hover:bg-cyan-400"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs text-slate-600">
                        {
                          [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                          ][index]
                        }
                      </span>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Severity */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

              <div className="mb-7">
                <h3 className="text-lg font-semibold">
                  DR Severity Distribution
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Current patient risk levels
                </p>
              </div>

              <div className="mb-8 flex justify-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-[20px] border-cyan-400/70">
                  <div className="text-center">
                    <p className="text-3xl font-bold">
                      3,482
                    </p>

                    <p className="text-xs text-slate-500">
                      Screenings
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">

                <div className="flex items-center justify-between rounded-xl bg-slate-950/70 p-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="text-sm text-slate-300">
                      No DR
                    </span>
                  </div>

                  <span className="font-semibold">
                    2,821
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-950/70 p-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="text-sm text-slate-300">
                      Mild / Moderate
                    </span>
                  </div>

                  <span className="font-semibold">
                    634
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-950/70 p-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="text-sm text-slate-300">
                      Severe
                    </span>
                  </div>

                  <span className="font-semibold">
                    27
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* Lower */}
          <div className="mt-7 grid gap-7 xl:grid-cols-3">

            {/* Urgent */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 xl:col-span-2">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    Urgent Cases
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Patients requiring immediate attention
                  </p>
                </div>

                <button
                  onClick={() => goTo("/urgent-cases")}
                  className="flex items-center gap-1 text-sm text-cyan-400"
                >
                  View all
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="space-y-3">
                {[
                  ["PT-2048", "Patient #2048", "Severe DR"],
                  ["PT-1987", "Patient #1987", "Proliferative DR"],
                  ["PT-1934", "Patient #1934", "Severe DR"],
                ].map(([id, patient, result]) => (
                  <div
                    key={id}
                    className="flex flex-col justify-between gap-4 rounded-xl border border-red-500/10 bg-red-500/5 p-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-400/10 text-red-400">
                        <AlertTriangle size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          {patient}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {id} • {result}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        goTo(`/patients/${id}`)
                      }
                      className="rounded-lg border border-red-400/20 px-4 py-2 text-xs font-medium text-red-400 hover:bg-red-400/10"
                    >
                      Review Case
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* AI */}
            <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-violet-400/10 p-3 text-violet-400">
                  <Brain size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    AI Insights
                  </h3>

                  <p className="text-xs text-slate-500">
                    System intelligence
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                <div className="rounded-xl bg-slate-950/60 p-4">
                  <div className="flex gap-3">
                    <Sparkles
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-400"
                    />

                    <div>
                      <p className="text-sm font-medium">
                        Screening volume increased
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Screening activity is 18% higher compared
                        with the previous period.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-950/60 p-4">
                  <div className="flex gap-3">
                    <Clock3
                      size={18}
                      className="mt-0.5 shrink-0 text-amber-400"
                    />

                    <div>
                      <p className="text-sm font-medium">
                        Review queue active
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        27 high-risk cases are waiting for clinical
                        review.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          {/* Quick Actions */}
          <section className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

            <h3 className="mb-6 text-lg font-semibold">
              Quick Actions
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <button
                onClick={() => goTo("/patients")}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-left transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <Users size={21} className="text-cyan-400" />

                <div>
                  <p className="text-sm font-medium">
                    Manage Patients
                  </p>

                  <p className="text-xs text-slate-500">
                    View patient list
                  </p>
                </div>
              </button>

              <button
                onClick={() => goTo("/screenings")}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-left transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <FileImage size={21} className="text-violet-400" />

                <div>
                  <p className="text-sm font-medium">
                    Screenings
                  </p>

                  <p className="text-xs text-slate-500">
                    Review screenings
                  </p>
                </div>
              </button>

              <button
                onClick={() => goTo("/urgent-cases")}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-left transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <AlertTriangle size={21} className="text-red-400" />

                <div>
                  <p className="text-sm font-medium">
                    Urgent Cases
                  </p>

                  <p className="text-xs text-slate-500">
                    Review critical cases
                  </p>
                </div>
              </button>

              <button
                onClick={() => goTo("/analytics")}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/50 p-4 text-left transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                <Brain size={21} className="text-emerald-400" />

                <div>
                  <p className="text-sm font-medium">
                    AI Analytics
                  </p>

                  <p className="text-xs text-slate-500">
                    View AI insights
                  </p>
                </div>
              </button>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;