import {
  ArrowLeft,
  Camera,
  Mail,
  Phone,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Profile() {
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
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-slate-500">
          Manage your personal and professional information.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="flex flex-col items-center gap-4 border-b border-slate-800 pb-8 sm:flex-row">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                <User size={40} />
              </div>

              <button className="absolute bottom-0 right-0 rounded-full bg-cyan-400 p-2 text-slate-950">
                <Camera size={15} />
              </button>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Dr. User</h2>
              <p className="text-sm text-slate-500">
                Healthcare Provider
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Input icon={<User size={17} />} label="Full Name" value="Dr. User" />
            <Input icon={<Mail size={17} />} label="Email" value="doctor@example.com" />
            <Input icon={<Phone size={17} />} label="Phone" value="+91 98765 43210" />
            <Input icon={<ShieldCheck size={17} />} label="Role" value="Healthcare Provider" />
          </div>

          <button className="mt-7 flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            <Save size={18} />
            Save Profile
          </button>
        </div>
      </main>
    </div>
  );
}

function Input({ icon, label, value }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-400">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">
          {icon}
        </div>

        <input
          defaultValue={value}
          className="w-full rounded-xl border border-slate-800 bg-slate-950 py-3 pl-11 pr-4 text-sm outline-none focus:border-cyan-400"
        />
      </div>
    </div>
  );
}

export default Profile;