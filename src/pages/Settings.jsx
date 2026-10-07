import {
  ArrowLeft,
  Bell,
  Lock,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800 px-5 py-5 lg:px-10">
        <button
          onClick={() => navigate("/user-dashboard")}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Dashboard
        </button>
      </header>

      <main className="mx-auto max-w-4xl p-5 py-10 lg:p-10">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your account and notification preferences.
          </p>
        </div>

        <div className="space-y-6">

          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

            <div className="mb-6 flex items-center gap-3">
              <User className="text-cyan-400" />
              <div>
                <h2 className="font-semibold">
                  Profile
                </h2>
                <p className="text-xs text-slate-500">
                  Personal information
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <Input label="Full Name" value="Dr. User" />
              <Input label="Email" value="doctor@example.com" />
              <Input label="Phone" value="+91 98765 43210" />
              <Input label="Role" value="Healthcare Provider" />

            </div>

            <button className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
              <Save size={17} />
              Save Changes
            </button>

          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

            <div className="mb-6 flex items-center gap-3">
              <Bell className="text-cyan-400" />
              <div>
                <h2 className="font-semibold">
                  Notifications
                </h2>
                <p className="text-xs text-slate-500">
                  Notification preferences
                </p>
              </div>
            </div>

            <Toggle title="Screening alerts" />
            <Toggle title="High-risk case alerts" />
            <Toggle title="System notifications" />

          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck className="text-cyan-400" />

              <div>
                <h2 className="font-semibold">
                  Security
                </h2>

                <p className="text-xs text-slate-500">
                  Account security settings
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-xl border border-slate-800 px-5 py-3 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
              <Lock size={17} />
              Change Password
            </button>

          </section>

        </div>

      </main>
    </div>
  );
}

function Input({ label, value }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-400">
        {label}
      </label>

      <input
        defaultValue={value}
        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400"
      />
    </div>
  );
}

function Toggle({ title }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 py-4 last:border-0">

      <span className="text-sm text-slate-300">
        {title}
      </span>

      <div className="h-6 w-11 rounded-full bg-cyan-400 p-1">
        <div className="h-4 w-4 translate-x-5 rounded-full bg-slate-950" />
      </div>

    </div>
  );
}

export default Settings;