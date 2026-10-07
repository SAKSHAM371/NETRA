import { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  Brain,
  CircleHelp,
  FileText,
  HeartPulse,
  Languages,
  Lightbulb,
  LogOut,
  Menu,
  Plus,
  Settings,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound,
  Users,
  X,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function UserDashboard() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { language, toggleLanguage } = useLanguage();

  const [mobileMenu, setMobileMenu] = useState(false);

  const t = (key) =>
    translations[language]?.[key] || translations.en?.[key] || key;

  // --------------------------------------------------
  // USER INFORMATION
  // --------------------------------------------------

  const displayName = user?.name || "Patient";
  const displayEmail = user?.email || "patient@example.com";

  const firstName = displayName.split(" ")[0];

  const initials = useMemo(() => {
    const parts = displayName
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (!parts.length) return "P";

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return parts
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
  }, [displayName]);

  // --------------------------------------------------
  // NAVIGATION
  // --------------------------------------------------

  const goTo = (path) => {
    setMobileMenu(false);
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("retinacareLoggedIn");
    navigate("/login");
  };

  // --------------------------------------------------
  // DATA
  // --------------------------------------------------

  const stats = [
    {
      title: t("totalScreenings"),
      value: "24",
      subtitle: `+3 ${t("thisMonth")}`,
      icon: Activity,
      iconClass: "bg-cyan-500/10 text-cyan-400",
      valueClass: "text-white",
      subtitleClass: "text-emerald-400",
    },
    {
      title: t("normalResults"),
      value: "18",
      subtitle: t("lowRisk"),
      icon: ShieldCheck,
      iconClass: "bg-emerald-500/10 text-emerald-400",
      valueClass: "text-white",
      subtitleClass: "text-emerald-400",
    },
    {
      title: t("needMonitoring"),
      value: "4",
      subtitle: t("mediumRisk"),
      icon: Activity,
      iconClass: "bg-amber-500/10 text-amber-400",
      valueClass: "text-white",
      subtitleClass: "text-amber-400",
    },
    {
      title: t("urgentCases"),
      value: "2",
      subtitle: t("highRisk"),
      icon: HeartPulse,
      iconClass: "bg-red-500/10 text-red-400",
      valueClass: "text-white",
      subtitleClass: "text-red-400",
    },
  ];

  const recentScreenings = [
    {
      id: "SCR-2048",
      date: "07 Oct 2026",
      eye: t("bothEyes"),
      result: t("noDR"),
      risk: t("lowRisk"),
      status: t("healthy"),
      riskClass:
        "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      statusClass: "text-emerald-400",
    },
    {
      id: "SCR-2047",
      date: "29 Sep 2026",
      eye: t("bothEyes"),
      result: t("mildDR"),
      risk: t("mediumRisk"),
      status: t("monitoring"),
      riskClass:
        "border-amber-500/20 bg-amber-500/10 text-amber-400",
      statusClass: "text-amber-400",
    },
    {
      id: "SCR-2046",
      date: "14 Sep 2026",
      eye: t("bothEyes"),
      result: t("noDR"),
      risk: t("lowRisk"),
      status: t("healthy"),
      riskClass:
        "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
      statusClass: "text-emerald-400",
    },
  ];

  // --------------------------------------------------
  // SIDEBAR
  // --------------------------------------------------

  const mainMenu = [
    {
      label: t("dashboard"),
      icon: Activity,
      path: "/user-dashboard",
      active: true,
    },
    {
      label: t("myScreenings"),
      icon: Eye,
      path: "/screenings",
    },
    {
      label: t("patients"),
      icon: Users,
      path: "/patients",
    },
    {
      label: t("recommendations"),
      icon: Lightbulb,
      path: "/recommendations",
    },
    {
      label: t("notifications"),
      icon: Bell,
      path: "/notifications",
      badge: 3,
    },
    {
      label: t("newScreening"),
      icon: Upload,
      path: "/upload-screening",
    },
  ];

  const accountMenu = [
    {
      label: t("reports"),
      icon: FileText,
      path: "/reports",
    },
    {
      label: t("profile"),
      icon: UserRound,
      path: "/profile",
    },
    {
      label: t("settings"),
      icon: Settings,
      path: "/settings",
    },
  ];

  // --------------------------------------------------
  // SIDEBAR COMPONENT
  // --------------------------------------------------

  const SidebarContent = () => (
    <div className="flex h-full flex-col">

      {/* Logo */}
      <div className="flex h-[68px] items-center border-b border-slate-800/80 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
            <Eye size={20} className="text-cyan-400" />
          </div>

          <div>
            <p className="text-sm font-bold text-white">
              NETRA AI
            </p>

            <p className="text-[10px] font-semibold tracking-wider text-cyan-400">
              AI SCREENING
            </p>
          </div>
        </div>
      </div>

      {/* Main menu */}
      <div className="flex-1 overflow-y-auto px-3 py-5">

        <p className="mb-3 px-3 text-[10px] font-semibold tracking-[0.2em] text-slate-600">
          {t("mainMenu")}
        </p>

        <div className="space-y-1">
          {mainMenu.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => goTo(item.path)}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                  item.active
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    item.active
                      ? "text-cyan-400"
                      : "text-slate-500 group-hover:text-slate-300"
                  }
                />

                <span className="flex-1 text-sm">
                  {item.label}
                </span>

                {item.badge && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-500 px-1.5 text-[10px] font-bold text-slate-950">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Account */}
        <p className="mb-3 mt-8 px-3 text-[10px] font-semibold tracking-[0.2em] text-slate-600">
          {t("account")}
        </p>

        <div className="space-y-1">
          {accountMenu.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => goTo(item.path)}
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-slate-400 transition hover:bg-slate-900 hover:text-white"
              >
                <Icon
                  size={18}
                  className="text-slate-500 group-hover:text-slate-300"
                />

                <span className="text-sm">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Support */}
        <p className="mb-3 mt-8 px-3 text-[10px] font-semibold tracking-[0.2em] text-slate-600">
          {language === "en" ? "SUPPORT" : "सहायता"}
        </p>

        <button
          onClick={() => goTo("/help-support")}
          className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-slate-400 transition hover:bg-slate-900 hover:text-white"
        >
          <CircleHelp
            size={18}
            className="text-slate-500 group-hover:text-slate-300"
          />

          <span className="text-sm">
            {t("helpSupport")}
          </span>
        </button>
      </div>

      {/* Logout */}
      <div className="border-t border-slate-800/80 p-3">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut size={18} />

          <span className="text-sm">
            {t("logout")}
          </span>
        </button>
      </div>
    </div>
  );

  // --------------------------------------------------
  // DASHBOARD
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Mobile overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-[236px] border-r border-slate-800/80 bg-[#020617] lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] border-r border-slate-800/80 bg-[#020617] transition-transform duration-300 lg:hidden ${
          mobileMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="absolute right-3 top-4">
          <button
            onClick={() => setMobileMenu(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <SidebarContent />
      </aside>

      {/* Main */}
      <div className="lg:pl-[236px]">

        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-slate-800/80 bg-[#020617]/95 px-4 backdrop-blur-xl sm:px-6 lg:px-7">

          <div className="flex items-center gap-4">

            {/* Mobile menu */}
            <button
              onClick={() => setMobileMenu(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 lg:hidden"
            >
              <Menu size={19} />
            </button>

            <div>
              <p className="hidden text-[11px] text-slate-500 sm:block">
                RetinaCare AI
              </p>

              <p className="text-sm font-semibold text-white sm:text-base">
                {t("dashboard")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">

            {/* Language */}
            <button
              onClick={toggleLanguage}
              className="flex h-9 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 text-sm text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              <Languages size={16} />

              <span className="hidden sm:inline">
                {language === "en" ? "English" : "हिन्दी"}
              </span>

              <span className="sm:hidden">
                {language === "en" ? "EN" : "हि"}
              </span>
            </button>

            {/* Notifications */}
            <button
              onClick={() => goTo("/notifications")}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:text-white"
            >
              <Bell size={17} />

              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-cyan-500 px-1 text-[9px] font-bold text-slate-950">
                3
              </span>
            </button>

            {/* Dynamic User */}
            <button
              onClick={() => goTo("/profile")}
              className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-1.5 transition hover:border-slate-700 sm:gap-3 sm:px-2.5"
            >

              {/* Dynamic initials */}
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-[11px] font-bold text-slate-950 sm:h-9 sm:w-9">
                {initials}
              </div>

              <div className="hidden text-left sm:block">
                <p className="max-w-[130px] truncate text-xs font-semibold text-white">
                  {displayName}
                </p>

                <p className="max-w-[130px] truncate text-[10px] text-slate-500">
                  {displayEmail}
                </p>
              </div>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="px-4 py-8 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-[1280px]">

            {/* Heading */}
            <section className="mb-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-end">

              <div>
                <div className="mb-3 flex items-center gap-2 text-cyan-400">
                  <Sparkles size={16} />

                  <span className="text-xs font-semibold tracking-wide">
                    RETINACARE AI
                  </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {language === "en"
                    ? `Good morning, ${firstName}`
                    : `सुप्रभात, ${firstName}`}
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-slate-500 sm:text-base">
                  {t("dashboardDescription")}
                </p>
              </div>

              {/* New Screening */}
              <button
                onClick={() => goTo("/upload-screening")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <Plus size={18} />
                {t("newScreening")}
              </button>
            </section>

            {/* Stats */}
            <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="rounded-2xl border border-slate-800/80 bg-[#0a1020] p-5"
                  >
                    <div className="flex items-start justify-between">

                      <div>
                        <p className="text-xs text-slate-500">
                          {stat.title}
                        </p>

                        <p className="mt-3 text-3xl font-bold text-white">
                          {stat.value}
                        </p>

                        <p
                          className={`mt-2 text-xs font-medium ${stat.subtitleClass}`}
                        >
                          {stat.subtitle}
                        </p>
                      </div>

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconClass}`}
                      >
                        <Icon size={19} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Risk + Quick Actions */}
            <section className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-[1.1fr_0.9fr]">

              {/* Risk Overview */}
              <div className="rounded-2xl border border-slate-800/80 bg-[#0a1020] p-6">

                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-white">
                    {t("riskOverview")}
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    {t("riskOverviewDescription")}
                  </p>
                </div>

                <div className="space-y-5">

                  {/* Low */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        {t("lowRisk")}
                      </span>

                      <span className="text-xs font-semibold text-white">
                        75%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[75%] rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Medium */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        {t("mediumRisk")}
                      </span>

                      <span className="text-xs font-semibold text-white">
                        17%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[17%] rounded-full bg-amber-400" />
                    </div>
                  </div>

                  {/* High */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        {t("highRisk")}
                      </span>

                      <span className="text-xs font-semibold text-white">
                        8%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[8%] rounded-full bg-red-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl border border-slate-800/80 bg-[#0a1020] p-6">

                <div className="mb-6">
                  <h2 className="text-sm font-semibold text-white">
                    {t("quickActions")}
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    {t("frequentlyUsedActions")}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">

                  <button
                    onClick={() => goTo("/upload-screening")}
                    className="group rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-left transition hover:border-cyan-500/30 hover:bg-slate-900"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Upload size={18} />
                    </div>

                    <p className="text-xs font-semibold text-white">
                      {t("uploadRetinalImages")}
                    </p>

                    <ArrowUpRight
                      size={15}
                      className="mt-3 text-slate-600 transition group-hover:text-cyan-400"
                    />
                  </button>

                  <button
                    onClick={() => goTo("/recommendations")}
                    className="group rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-left transition hover:border-violet-500/30 hover:bg-slate-900"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                      <Lightbulb size={18} />
                    </div>

                    <p className="text-xs font-semibold text-white">
                      {t("viewHealthGuidance")}
                    </p>

                    <ArrowUpRight
                      size={15}
                      className="mt-3 text-slate-600 transition group-hover:text-violet-400"
                    />
                  </button>

                  <button
                    onClick={() => goTo("/reports")}
                    className="group rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-left transition hover:border-emerald-500/30 hover:bg-slate-900"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                      <FileText size={18} />
                    </div>

                    <p className="text-xs font-semibold text-white">
                      {t("checkPreviousReports")}
                    </p>

                    <ArrowUpRight
                      size={15}
                      className="mt-3 text-slate-600 transition group-hover:text-emerald-400"
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Recent Screenings */}
            <section className="mb-7 overflow-hidden rounded-2xl border border-slate-800/80 bg-[#0a1020]">

              <div className="flex items-center justify-between border-b border-slate-800/80 px-5 py-5 sm:px-6">

                <div>
                  <h2 className="text-sm font-semibold text-white">
                    {t("recentScreenings")}
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    {t("recentScreeningsDescription")}
                  </p>
                </div>

                <button
                  onClick={() => goTo("/screenings")}
                  className="flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                >
                  {t("viewAll")}
                  <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-800/80">
                      <th className="px-5 py-3 text-left text-[10px] font-semibold tracking-wider text-slate-600">
                        {t("screeningId")}
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-semibold tracking-wider text-slate-600">
                        {t("date")}
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-semibold tracking-wider text-slate-600">
                        {t("eye")}
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-semibold tracking-wider text-slate-600">
                        {t("result")}
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-semibold tracking-wider text-slate-600">
                        {t("risk")}
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-semibold tracking-wider text-slate-600">
                        {t("status")}
                      </th>

                      <th className="px-5 py-3 text-left text-[10px] font-semibold tracking-wider text-slate-600">
                        {t("action")}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentScreenings.map((screening) => (
                      <tr
                        key={screening.id}
                        className="border-b border-slate-800/60 last:border-b-0 hover:bg-slate-900/30"
                      >
                        <td className="px-5 py-4">
                          <span className="text-xs font-semibold text-cyan-400">
                            {screening.id}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-xs text-slate-400">
                          {screening.date}
                        </td>

                        <td className="px-5 py-4 text-xs text-slate-400">
                          {screening.eye}
                        </td>

                        <td className="px-5 py-4 text-xs text-slate-300">
                          {screening.result}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium ${screening.riskClass}`}
                          >
                            {screening.risk}
                          </span>
                        </td>

                        <td
                          className={`px-5 py-4 text-xs font-medium ${screening.statusClass}`}
                        >
                          {screening.status}
                        </td>

                        <td className="px-5 py-4">
                          <button
                            onClick={() =>
                              goTo(`/screenings/${screening.id}`)
                            }
                            className="flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300"
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

              {/* Mobile cards */}
              <div className="divide-y divide-slate-800/60 md:hidden">
                {recentScreenings.map((screening) => (
                  <div
                    key={screening.id}
                    className="p-5"
                  >
                    <div className="flex items-start justify-between gap-3">

                      <div>
                        <p className="text-xs font-semibold text-cyan-400">
                          {screening.id}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {screening.date}
                        </p>
                      </div>

                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${screening.riskClass}`}
                      >
                        {screening.risk}
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

                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className={`text-xs font-medium ${screening.statusClass}`}
                      >
                        {screening.status}
                      </span>

                      <button
                        onClick={() =>
                          goTo(`/screenings/${screening.id}`)
                        }
                        className="flex items-center gap-1 text-xs font-medium text-cyan-400"
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
            <section className="rounded-2xl border border-cyan-500/10 bg-gradient-to-r from-cyan-500/[0.06] to-transparent p-5 sm:p-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Brain size={21} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-sm font-semibold text-white">
                      {t("aiHealthInsights")}
                    </h2>

                    <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 text-[9px] font-semibold text-cyan-400">
                      {t("aiAssisted")}
                    </span>
                  </div>

                  <p className="mt-2 max-w-4xl text-xs leading-6 text-slate-500">
                    {t("aiInsightText")}
                  </p>

                  <div className="mt-4 flex gap-2">
                    <span className="text-xs font-semibold text-amber-400">
                      {t("important")}:
                    </span>

                    <p className="text-xs leading-5 text-slate-500">
                      {t("disclaimer")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default UserDashboard;