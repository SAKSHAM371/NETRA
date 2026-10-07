import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function HelpSupport() {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();

  const t = (key) =>
    translations[language]?.[key] || key;

  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      question: t("faq1Question"),
      answer: t("faq1Answer"),
    },
    {
      question: t("faq2Question"),
      answer: t("faq2Answer"),
    },
    {
      question: t("faq3Question"),
      answer: t("faq3Answer"),
    },
    {
      question: t("faq4Question"),
      answer: t("faq4Answer"),
    },
    {
      question: t("faq5Question"),
      answer: t("faq5Answer"),
    },
    {
      question: t("faq6Question"),
      answer: t("faq6Answer"),
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Topbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                navigate("/user-dashboard")
              }
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <p className="text-sm font-semibold text-white">
                {t("helpSupport")}
              </p>

              <p className="hidden text-xs text-slate-500 sm:block">
                {t("helpSupportSubtitle")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {language === "en"
                ? "English"
                : "हिंदी"}
            </button>

            <button
              onClick={() =>
                navigate("/notifications")
              }
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Bell size={18} />

              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-cyan-500 px-1 text-[9px] font-bold text-slate-950">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="relative mb-8 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-900 p-6 sm:p-8">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <CircleHelp size={25} />
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles
                    size={14}
                    className="text-cyan-400"
                  />

                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {t("supportCenter")}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {t("helpSupport")}
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                {t("helpSupportDescription")}
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <ShieldCheck
                size={22}
                className="text-emerald-400"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  {t("secureSupport")}
                </p>

                <p className="text-xs text-slate-500">
                  {t("secureSupportDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Cards */}
        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <Mail size={21} />
            </div>

            <h3 className="font-semibold text-white">
              {t("emailSupport")}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {t("emailSupportDescription")}
            </p>

            <p className="mt-4 text-sm font-medium text-cyan-400">
              support@retinacare.ai
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Phone size={21} />
            </div>

            <h3 className="font-semibold text-white">
              {t("phoneSupport")}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {t("phoneSupportDescription")}
            </p>

            <p className="mt-4 text-sm font-medium text-emerald-400">
              +91 1800-000-000
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <Clock3 size={21} />
            </div>

            <h3 className="font-semibold text-white">
              {t("supportHours")}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {t("supportHoursDescription")}
            </p>

            <p className="mt-4 text-sm font-medium text-violet-400">
              {t("supportTiming")}
            </p>
          </div>
        </section>

        {/* FAQ + Contact */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* FAQ */}
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-white">
                {t("frequentlyAskedQuestions")}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {t("faqDescription")}
              </p>
            </div>

            <div className="relative mb-4">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder={t("searchFaq")}
                className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
              />
            </div>

            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen =
                    openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                    >
                      <button
                        onClick={() =>
                          setOpenFaq(
                            isOpen ? null : index
                          )
                        }
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03]"
                      >
                        <span className="text-sm font-medium leading-6 text-slate-200">
                          {faq.question}
                        </span>

                        <ChevronDown
                          size={18}
                          className={`shrink-0 transition-transform ${
                            isOpen
                              ? "rotate-180 text-cyan-400"
                              : "text-slate-500"
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 px-5 py-4">
                          <p className="text-sm leading-6 text-slate-400">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
                  <Search
                    size={28}
                    className="mx-auto text-slate-600"
                  />

                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {t("noFaqFound")}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {t("noFaqFoundDescription")}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-white">
                {t("contactSupport")}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {t("contactSupportDescription")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {t("supportRequestSent")}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    {t("supportRequestSentDescription")}
                  </p>

                  <button
                    onClick={() =>
                      setSubmitted(false)
                    }
                    className="mt-6 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    {t("sendAnotherRequest")}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        {t("name")}
                      </label>

                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t("enterName")}
                        className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        {t("email")}
                      </label>

                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t("enterEmail")}
                        className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      {t("subject")}
                    </label>

                    <input
                      required
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder={t("enterSubject")}
                      className="h-11 w-full rounded-xl border border-white/10 bg-slate-950 px-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      {t("message")}
                    </label>

                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder={t("enterMessage")}
                      className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    <Send size={16} />
                    {t("sendMessage")}
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>

        {/* Important Note */}
        <section className="mt-8 rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-5">
          <div className="flex gap-3">
            <MessageCircle
              size={20}
              className="mt-0.5 shrink-0 text-amber-400"
            />

            <div>
              <h3 className="text-sm font-semibold text-amber-300">
                {t("importantSupportNote")}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {t("importantSupportNoteDescription")}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-600">
          {t("supportFooter")}
        </div>
      </main>
    </div>
  );
}

export default HelpSupport;