import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  Bell,
  CheckCircle2,
  Clock3,
  Eye,
  Info,
  Languages,
  Trash2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function Notifications() {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  const t = (key) => translations[language][key] || key;

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "urgent",
      title: "urgentScreeningResult",
      message: "urgentScreeningMessage",
      time: "tenMinutesAgo",
      read: false,
      path: "/screenings/SCR-2029",
    },
    {
      id: 2,
      type: "result",
      title: "screeningResultAvailable",
      message: "screeningResultMessage",
      time: "twoHoursAgo",
      read: false,
      path: "/screenings/SCR-2048",
    },
    {
      id: 3,
      type: "reminder",
      title: "screeningReminder",
      message: "screeningReminderMessage",
      time: "yesterday",
      read: false,
      path: "/recommendations",
    },
    {
      id: 4,
      type: "info",
      title: "newRecommendationsAvailable",
      message: "newRecommendationsMessage",
      time: "twoDaysAgo",
      read: true,
      path: "/recommendations",
    },
    {
      id: 5,
      type: "success",
      title: "screeningUploaded",
      message: "screeningUploadedMessage",
      time: "threeDaysAgo",
      read: true,
      path: "/screenings",
    },
  ]);

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  const getIcon = (type) => {
    switch (type) {
      case "urgent":
        return {
          Icon: AlertCircle,
          box: "bg-red-400/10",
          text: "text-red-400",
        };

      case "result":
        return {
          Icon: Eye,
          box: "bg-cyan-400/10",
          text: "text-cyan-400",
        };

      case "reminder":
        return {
          Icon: Clock3,
          box: "bg-amber-400/10",
          text: "text-amber-400",
        };

      case "success":
        return {
          Icon: CheckCircle2,
          box: "bg-emerald-400/10",
          text: "text-emerald-400",
        };

      default:
        return {
          Icon: Info,
          box: "bg-violet-400/10",
          text: "text-violet-400",
        };
    }
  };

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((current) =>
      current.filter(
        (notification) => notification.id !== id
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const openNotification = (notification) => {
    markAsRead(notification.id);

    if (notification.path) {
      navigate(notification.path);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="lg:ml-64">
        <div className="mx-auto max-w-5xl p-5 sm:p-7 lg:p-9">

          {/* Header */}
          <div className="mb-8">
            <div className="mb-5 flex items-center justify-between">
              <button
                onClick={() =>
                  navigate("/user-dashboard")
                }
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-white"
              >
                <ArrowLeft size={16} />
                {t("backToDashboard")}
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <Languages size={16} />

                {language === "en"
                  ? t("hindi")
                  : t("english")}
              </button>
            </div>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Bell
                    size={24}
                    className="text-cyan-400"
                  />

                  {unreadCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </div>

                <div>
                  <h1 className="text-3xl font-bold">
                    {t("notificationsTitle")}
                  </h1>

                  <p className="mt-1 text-sm text-slate-500">
                    {t("notificationsDescription")}
                  </p>
                </div>
              </div>

              {notifications.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="rounded-xl border border-slate-800 px-4 py-2.5 text-xs text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {t("markAllAsRead")}
                    </button>
                  )}

                  <button
                    onClick={clearAll}
                    className="flex items-center gap-2 rounded-xl border border-red-400/10 px-4 py-2.5 text-xs text-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 size={14} />
                    {t("clearAll")}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs text-slate-500">
                {t("totalNotifications")}
              </p>

              <p className="mt-2 text-2xl font-bold">
                {notifications.length}
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
              <p className="text-xs text-slate-500">
                {t("unread")}
              </p>

              <p className="mt-2 text-2xl font-bold text-cyan-400">
                {unreadCount}
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-5">
              <p className="text-xs text-slate-500">
                {t("read")}
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-400">
                {notifications.length - unreadCount}
              </p>
            </div>
          </div>

          {/* Empty */}
          {notifications.length === 0 ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 px-6 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800">
                <Bell
                  size={28}
                  className="text-slate-600"
                />
              </div>

              <h2 className="text-lg font-semibold">
                {t("noNotifications")}
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
                {t("noNotificationsDescription")}
              </p>

              <button
                onClick={() =>
                  navigate("/user-dashboard")
                }
                className="mt-6 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
              >
                {t("backToDashboard")}
              </button>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
              <div className="border-b border-slate-800 px-6 py-5">
                <h2 className="font-semibold">
                  {t("recentNotifications")}
                </h2>

                <p className="mt-1 text-xs text-slate-600">
                  {t("recentNotificationsDescription")}
                </p>
              </div>

              {notifications.map((notification) => {
                const { Icon, box, text } = getIcon(
                  notification.type
                );

                return (
                  <div
                    key={notification.id}
                    className={`border-b border-slate-800/80 p-5 last:border-0 sm:p-6 ${
                      !notification.read
                        ? "bg-cyan-400/[0.025]"
                        : ""
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${box}`}
                      >
                        <Icon
                          size={20}
                          className={text}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-semibold">
                              {t(notification.title)}
                            </h3>

                            {!notification.read && (
                              <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            )}
                          </div>

                          <span className="text-[11px] text-slate-600">
                            {t(notification.time)}
                          </span>
                        </div>

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                          {t(notification.message)}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-3">
                          <button
                            onClick={() =>
                              openNotification(
                                notification
                              )
                            }
                            className="rounded-lg bg-cyan-400/10 px-3 py-2 text-[11px] font-medium text-cyan-400 hover:bg-cyan-400/20"
                          >
                            {t("viewDetails")}
                          </button>

                          {!notification.read && (
                            <button
                              onClick={() =>
                                markAsRead(
                                  notification.id
                                )
                              }
                              className="rounded-lg px-3 py-2 text-[11px] text-slate-500 hover:bg-slate-800 hover:text-white"
                            >
                              {t("markAsRead")}
                            </button>
                          )}

                          <button
                            onClick={() =>
                              deleteNotification(
                                notification.id
                              )
                            }
                            className="rounded-lg px-3 py-2 text-[11px] text-slate-600 hover:bg-red-400/10 hover:text-red-400"
                          >
                            {t("delete")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-6 rounded-xl border border-amber-400/10 bg-amber-400/5 p-4">
            <p className="text-xs leading-5 text-slate-500">
              <span className="font-medium text-amber-400">
                {t("important")}
              </span>{" "}
              {t("notificationDisclaimer")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Notifications;