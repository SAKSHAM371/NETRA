import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Mail,
  Phone,
  Save,
  Shield,
  UserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

function Profile() {
  const navigate = useNavigate();

  const { user, updateUser } = useAuth();
  const { language } = useLanguage();

  const t = (key) =>
    translations[language]?.[key] ||
    translations.en?.[key] ||
    key;

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
  }, [user]);

  const initials = useMemo(() => {
    const parts = name
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (!parts.length) return "P";

    if (parts.length === 1) {
      return parts[0]
        .slice(0, 2)
        .toUpperCase();
    }

    return parts
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }, [name]);

  const handleSave = () => {
    if (!name.trim() || !email.trim()) return;

    updateUser({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Top bar */}
      <header className="border-b border-slate-800/80">
        <div className="mx-auto flex h-12 max-w-[1280px] items-center px-6">
          <button
            onClick={() => navigate("/user-dashboard")}
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="px-5 py-10 sm:px-8">

        <div className="mx-auto max-w-[714px]">

          {/* Heading */}
          <div className="mb-7">
            <h1 className="text-3xl font-bold">
              My Profile
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your personal information.
            </p>
          </div>

          {/* Profile Card */}
          <div className="rounded-2xl border border-slate-800/80 bg-[#0a1020] p-5 sm:p-6">

            {/* User Header */}
            <div className="flex items-center gap-4">

              <div className="relative">

                {/* Dynamic initials */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10 text-2xl font-bold text-cyan-400">
                  {initials}
                </div>

                <button
                  type="button"
                  className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-slate-950"
                >
                  <Camera size={14} />
                </button>
              </div>

              <div className="min-w-0">

                <h2 className="truncate text-lg font-semibold text-white">
                  {user?.name || "Patient"}
                </h2>

                <p className="mt-1 truncate text-sm text-slate-500">
                  {user?.email || "No email available"}
                </p>

                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/10 bg-cyan-500/5 px-2.5 py-1 text-[10px] font-medium text-cyan-400">
                  <Shield size={12} />
                  Patient User
                </div>

              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-slate-800/80" />

            {/* Form */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Full Name
                </label>

                <div className="relative">

                  <UserRound
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-800 bg-[#020617] py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Email
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-800 bg-[#020617] py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Phone
                </label>

                <div className="relative">

                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-800 bg-[#020617] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Role
                </label>

                <div className="relative">

                  <Shield
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                  />

                  <input
                    type="text"
                    value="Patient User"
                    readOnly
                    className="w-full cursor-not-allowed rounded-xl border border-slate-800 bg-[#020617] py-3 pl-11 pr-4 text-sm text-slate-400 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Save */}
            <div className="mt-6 flex flex-wrap items-center gap-4">

              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <Save size={16} />
                Save Profile
              </button>

              {saved && (
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={17} />
                  Profile updated successfully
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;