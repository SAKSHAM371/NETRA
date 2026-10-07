import { useState } from "react";
import {
  Brain,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [portal, setPortal] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (portal === "user") {
      navigate("/user-dashboard");
    } else {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-slate-950" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20">
                <Eye size={24} />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  RetinaCare AI
                </h1>
                <p className="text-xs text-slate-400">
                  Intelligent Screening Platform
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <Sparkles size={16} />
                AI Powered Healthcare
              </div>

              <h2 className="text-5xl font-bold leading-tight tracking-tight xl:text-6xl">
                Smarter retinal
                <span className="block text-cyan-400">
                  screening.
                </span>
                Better care.
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
                An intelligent diabetic retinopathy screening platform that
                combines retinal image analysis with AI-assisted risk
                assessment.
              </p>

              {/* Features */}
              <div className="mt-10 grid gap-5">

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <Brain className="text-cyan-400" size={22} />
                  </div>

                  <div>
                    <p className="font-semibold">AI-Powered Analysis</p>
                    <p className="text-sm text-slate-500">
                      Advanced image-based retinal screening.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                    <ShieldCheck className="text-cyan-400" size={22} />
                  </div>

                  <div>
                    <p className="font-semibold">Secure Patient Data</p>
                    <p className="text-sm text-slate-500">
                      Designed with privacy and secure access in mind.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span>© 2026 RetinaCare AI</span>
              <span>•</span>
              <span>Clinical Decision Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center bg-slate-900 px-6 py-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                <Eye size={24} />
              </div>

              <div>
                <h1 className="text-xl font-bold">
                  RetinaCare AI
                </h1>
                <p className="text-xs text-slate-500">
                  Intelligent Screening Platform
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <p className="mb-3 text-sm font-medium text-cyan-400">
                Welcome back
              </p>

              <h2 className="text-3xl font-bold">
                Sign in to your workspace
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Select your portal and continue securely.
              </p>
            </div>

            {/* Portal Switch */}
            <div className="mb-7 grid grid-cols-2 rounded-xl border border-slate-700 bg-slate-950 p-1">

              <button
                type="button"
                onClick={() => setPortal("user")}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  portal === "user"
                    ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <User size={17} />
                User Portal
              </button>

              <button
                type="button"
                onClick={() => setPortal("admin")}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  portal === "admin"
                    ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <ShieldCheck size={17} />
                Admin Portal
              </button>

            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="doctor@example.com"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                {portal === "user"
                  ? "Sign in as User"
                  : "Sign in as Admin"}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>

            {/* Security */}
            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={15} className="text-cyan-400" />
              <span>Secure access</span>
              <span>•</span>
              <span>Protected healthcare environment</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;