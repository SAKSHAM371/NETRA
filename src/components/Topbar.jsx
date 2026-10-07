import {
  Bell,
  Eye,
  LogOut,
  Menu,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Topbar({ title = "Dashboard", onMenuClick }) {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-5 backdrop-blur-xl lg:px-8">

      <div className="flex items-center gap-4">

        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <Menu size={21} />
          </button>
        )}

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 lg:hidden">
            <Eye size={19} />
          </div>

          <div>
            <p className="text-xs text-slate-500">
              RetinaCare AI
            </p>

            <h1 className="text-lg font-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">

        <button className="relative rounded-xl border border-slate-800 p-2.5 text-slate-400 hover:bg-slate-900 hover:text-white">
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </button>

        <div className="hidden h-8 w-px bg-slate-800 sm:block" />

        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
            <User size={18} />
          </div>

          <div>
            <p className="text-sm font-medium">
              Dr. User
            </p>

            <p className="text-xs text-slate-500">
              Healthcare Provider
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="rounded-xl p-2.5 text-slate-500 hover:bg-red-500/10 hover:text-red-400"
          title="Logout"
        >
          <LogOut size={19} />
        </button>

      </div>
    </header>
  );
}

export default Topbar;