import { ArrowLeft, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
          <Eye size={38} />
        </div>

        <p className="mt-8 text-7xl font-bold text-cyan-400">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold">
          Page not found
        </h1>

        <p className="mt-2 text-slate-500">
          The page you're looking for doesn't exist.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-7 flex mx-auto items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
        >
          <ArrowLeft size={18} />
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default NotFound;