import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Eye,
  FileText,
  ImagePlus,
  Languages,
  Lightbulb,
  LogOut,
  Menu,
  Settings,
  ShieldCheck,
  Sparkles,
  Upload,
  Users,
  X,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function UserDashboard() {
  const navigate = useNavigate();

  const { language, toggleLanguage } = useLanguage();

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  const goTo = (path) => {
    setMobileMenu(false);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("retinacare-user");
    localStorage.removeItem("retinacareLoggedIn");
    navigate("/login");
  };

  const recentScreenings = [
    {
      id: "SCR-2048",
      date: "07 Oct 2026",
      eye: t("bothEyes"),
      result: t("noDR"),
      risk: "low",
      status: "healthy",
    },
    {
      id: "SCR-2047",
      date: "29 Sep 2026",
      eye: t("bothEyes"),
      result: t("mildDR"),
      risk: "medium",
      status: "monitoring",
    },
    {
      id: "SCR-2046",
      date: "14 Sep 2026",
      eye: t("bothEyes"),
      result: t("noDR"),
      risk: "low",
      status: "healthy",
    },
    {
      id: "SCR-2045",
      date: "28 Aug 2026",
      eye: t("bothEyes"),
      result: t("moderateDR"),
      risk: "high",
      status: "urgent",
    },
  ];

  const getRiskClasses = (risk) => {
    if (risk === "low") {
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-400";
    }

    if (risk === "medium") {
      return "border-amber-500/20 bg-amber-500/10 text-amber-400";
    }

    return "border-red-500/20 bg-red-500/10 text-red-400";
  };

  const getStatusClasses = (status) => {
    if (status === "healthy") return "text-emerald-400";
    if (status === "monitoring") return "text-amber-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Mobile Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* =========================================================
          SIDEBAR
      ========================================================= */}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-white/10 bg-slate-950 transition-transform duration-300 lg:translate-x-0 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <button
            onClick={() => goTo("/user-dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <Eye size={22} />
            </div>

            <div className="text-left">
              <p className="text-sm font-bold text-white">
                RetinaCare
              </p>

              <p className="text-[10px] font-medium uppercase tracking-widest text-cyan-400">
                AI Screening
              </p>
            </div>
          </button>

          <button
            onClick={() => setMobileMenu(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            {t("mainMenu")}
          </p>

          {/* Dashboard */}
          <button
            onClick={() => goTo("/user-dashboard")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl bg-cyan-500/10 px-3 py-2.5 text-sm font-medium text-cyan-400"
          >
            <Activity size={18} />
            <span>{t("dashboard")}</span>
          </button>

          {/* My Screenings */}
          <button
            onClick={() => goTo("/screenings")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Eye size={18} />
            <span>{t("myScreenings")}</span>
          </button>

          {/* Patients */}
          <button
            onClick={() => goTo("/patients")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Users size={18} />
            <span>{t("patients")}</span>
          </button>

          {/* Recommendations */}
          <button
            onClick={() => goTo("/recommendations")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Lightbulb size={18} />
            <span>{t("recommendations")}</span>
          </button>

          {/* Notifications */}
          <button
            onClick={() => goTo("/notifications")}
            className="mb-1 flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <div className="flex items-center gap-3">
              <Bell size={18} />
              <span>{t("notifications")}</span>
            </div>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-500 px-1.5 text-[10px] font-bold text-slate-950">
              3
            </span>
          </button>

          {/* New Screening */}
          <button
            onClick={() => goTo("/upload-screening")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Upload size={18} />
            <span>{t("newScreening")}</span>
          </button>

          {/* Account */}
          <p className="mb-3 mt-7 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            {t("account")}
          </p>

          {/* Reports */}
          <button
            onClick={() => goTo("/reports")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <FileText size={18} />
            <span>{t("reports")}</span>
          </button>

          {/* Profile */}
          <button
            onClick={() => goTo("/profile")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Users size={18} />
            <span>{t("profile")}</span>
          </button>

          {/* Settings */}
          <button
            onClick={() => goTo("/settings")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Settings size={18} />
            <span>{t("settings")}</span>
          </button>

          {/* ================= SUPPORT ================= */}

          <p className="mb-3 mt-7 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            {language === "en" ? "SUPPORT" : "सहायता"}
          </p>

          <button
            onClick={() => goTo("/help-support")}
            className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <CircleHelp size={18} />
            <span>{t("helpSupport")}</span>
          </button>
        </div>

        {/* Logout */}
        <div className="border-t border-white/10 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10"
          >
            <LogOut size={18} />
            <span>{t("logout")}</span>
          </button>
        </div>
      </aside>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <div className="lg:pl-[270px]">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenu(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 lg:hidden"
              >
                <Menu size={20} />
              </button>

              <div>
                <p className="text-xs text-slate-500">
                  {t("retinaCareAI")}
                </p>

                <h1 className="text-lg font-bold text-white">
                  {t("dashboard")}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Language */}
              <button
                onClick={toggleLanguage}
                className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white sm:flex"
              >
                <Languages size={15} />

                <span>
                  {language === "en" ? "English" : "हिंदी"}
                </span>
              </button>

              <button
                onClick={toggleLanguage}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 sm:hidden"
              >
                <Languages size={17} />
              </button>

              {/* Notifications */}
              <button
                onClick={() => goTo("/notifications")}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Bell size={18} />

                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-cyan-500 px-1 text-[9px] font-bold text-slate-950">
                  3
                </span>
              </button>

              {/* User */}
              <button
                onClick={() => goTo("/profile")}
                className="hidden items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 transition hover:bg-white/10 sm:flex"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-slate-950">
                  PS
                </div>

                <div className="text-left">
                  <p className="text-xs font-semibold text-white">
                    Patient User
                  </p>

                  <p className="text-[10px] text-slate-500">
                    PT-2048
                  </p>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
          {/* Welcome */}
          <section className="mb-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-cyan-400"
                  />

                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {t("retinaCareAI")}
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {t("goodMorning")}, Patient
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  {t("dashboardDescription")}
                </p>
              </div>

              <button
                onClick={() => goTo("/upload-screening")}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <ImagePlus size={17} />
                {t("newScreening")}
              </button>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {t("totalScreenings")}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-white">
                    24
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    <span className="text-emerald-400">+3</span>{" "}
                    {t("thisMonth")}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Activity size={21} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {t("normalResults")}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-white">
                    18
                  </p>

                  <p className="mt-2 text-xs text-emerald-400">
                    {t("lowRisk")}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={21} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {t("needMonitoring")}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-white">
                    4
                  </p>

                  <p className="mt-2 text-xs text-amber-400">
                    {t("mediumRisk")}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Clock3 size={21} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {t("urgentCases")}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-white">
                    2
                  </p>

                  <p className="mt-2 text-xs text-red-400">
                    {t("highRisk")}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <AlertCircle size={21} />
                </div>
              </div>
            </div>
          </section>

          {/* Middle */}
          <section className="mb-8 grid gap-6 xl:grid-cols-2">
            {/* Risk */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6">
                <h3 className="text-base font-bold text-white">
                  {t("riskOverview")}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {t("riskOverviewDescription")}
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                      <span className="text-sm text-slate-300">
                        {t("lowRisk")}
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-white">
                      75%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[75%] rounded-full bg-emerald-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />

                      <span className="text-sm text-slate-300">
                        {t("mediumRisk")}
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-white">
                      17%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[17%] rounded-full bg-amber-400" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />

                      <span className="text-sm text-slate-300">
                        {t("highRisk")}
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-white">
                      8%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-[8%] rounded-full bg-red-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6">
                <h3 className="text-base font-bold text-white">
                  {t("quickActions")}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {t("frequentlyUsedActions")}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <button
                  onClick={() => goTo("/upload-screening")}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Upload size={19} />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-white">
                    {t("uploadRetinalImages")}
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="mt-3 text-slate-600 group-hover:text-cyan-400"
                  />
                </button>

                <button
                  onClick={() => goTo("/recommendations")}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-violet-400/20 hover:bg-violet-400/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Lightbulb size={19} />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-white">
                    {t("viewHealthGuidance")}
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="mt-3 text-slate-600 group-hover:text-violet-400"
                  />
                </button>

                <button
                  onClick={() => goTo("/reports")}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-emerald-400/20 hover:bg-emerald-400/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <FileText size={19} />
                  </div>

                  <p className="mt-4 text-sm font-semibold text-white">
                    {t("checkPreviousReports")}
                  </p>

                  <ArrowUpRight
                    size={16}
                    className="mt-3 text-slate-600 group-hover:text-emerald-400"
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Recent Screenings */}
          <section className="mb-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex flex-col justify-between gap-3 border-b border-white/10 p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-bold text-white">
                  {t("recentScreenings")}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {t("recentScreeningsDescription")}
                </p>
              </div>

              <button
                onClick={() => goTo("/screenings")}
                className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400"
              >
                {t("viewAll")}
                <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="px-6 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                      {t("screeningId")}
                    </th>

                    <th className="px-6 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                      {t("date")}
                    </th>

                    <th className="px-6 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                      {t("eye")}
                    </th>

                    <th className="px-6 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                      {t("result")}
                    </th>

                    <th className="px-6 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                      {t("risk")}
                    </th>

                    <th className="px-6 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                      {t("status")}
                    </th>

                    <th className="px-6 py-4 text-[10px] uppercase tracking-wider text-slate-600">
                      {t("action")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentScreenings.map((screening) => (
                    <tr
                      key={screening.id}
                      className="border-b border-white/5 hover:bg-white/[0.02]"
                    >
                      <td className="px-6 py-4 text-xs font-semibold text-cyan-400">
                        {screening.id}
                      </td>

                      <td className="px-6 py-4 text-xs text-slate-400">
                        {screening.date}
                      </td>

                      <td className="px-6 py-4 text-xs text-slate-400">
                        {screening.eye}
                      </td>

                      <td className="px-6 py-4 text-xs text-slate-300">
                        {screening.result}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold ${getRiskClasses(
                            screening.risk
                          )}`}
                        >
                          {screening.risk === "low"
                            ? t("lowRisk")
                            : screening.risk === "medium"
                            ? t("mediumRisk")
                            : t("highRisk")}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-medium ${getStatusClasses(
                            screening.status
                          )}`}
                        >
                          {t(screening.status)}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() =>
                            goTo(
                              `/screenings/${screening.id}`
                            )
                          }
                          className="flex items-center gap-1 text-xs font-semibold text-cyan-400"
                        >
                          {t("view")}
                          <ArrowUpRight size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="space-y-3 p-4 md:hidden">
              {recentScreenings.map((screening) => (
                <div
                  key={screening.id}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold text-cyan-400">
                        {screening.id}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {screening.date}
                      </p>
                    </div>

                    <span
                      className={`rounded-full border px-2 py-1 text-[9px] font-semibold ${getRiskClasses(
                        screening.risk
                      )}`}
                    >
                      {screening.risk === "low"
                        ? t("lowRisk")
                        : screening.risk === "medium"
                        ? t("mediumRisk")
                        : t("highRisk")}
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] text-slate-600">
                        {t("eye")}
                      </p>

                      <p className="mt-1 text-xs text-slate-300">
                        {screening.eye}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-600">
                        {t("result")}
                      </p>

                      <p className="mt-1 text-xs text-slate-300">
                        {screening.result}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                    <span
                      className={`text-xs font-medium ${getStatusClasses(
                        screening.status
                      )}`}
                    >
                      {t(screening.status)}
                    </span>

                    <button
                      onClick={() =>
                        goTo(
                          `/screenings/${screening.id}`
                        )
                      }
                      className="flex items-center gap-1 text-xs font-semibold text-cyan-400"
                    >
                      {t("viewDetails")}
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Insights */}
          <section className="rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/[0.07] via-white/[0.02] to-white/[0.02] p-6">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Sparkles size={22} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-white">
                    {t("aiHealthInsights")}
                  </h3>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-400">
                    {t("aiAssisted")}
                  </span>
                </div>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-400">
                  {t("aiInsightText")}
                </p>

                <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-400/10 bg-amber-400/[0.03] p-3">
                  <ShieldCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-amber-400"
                  />

                  <p className="text-[11px] leading-5 text-slate-500">
                    <span className="font-semibold text-amber-300">
                      {t("important")}:
                    </span>{" "}
                    {t("disclaimer")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Help & Support Quick Card */}
          <section className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-500/[0.03] p-5">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <CircleHelp size={21} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {t("helpSupport")}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {t("helpSupportDescriptionShort")}
                  </p>
                </div>
              </div>

              <button
                onClick={() => goTo("/help-support")}
                className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-xs font-semibold text-cyan-400 transition hover:bg-cyan-400/10"
              >
                {t("getHelp")}
                <ArrowUpRight size={14} />
              </button>
            </div>
          </section>

          <footer className="mt-8 border-t border-white/10 pt-6 text-center text-[10px] text-slate-600">
            {t("dashboardFooter")}
          </footer>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;