import {
  Activity,
  ArrowLeft,
  CalendarDays,
  FileImage,
  HeartPulse,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function PatientProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-5 py-5 lg:px-10">
        <button
          onClick={() => navigate("/patients")}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Patients
        </button>
      </header>

      <main className="mx-auto max-w-6xl p-5 py-10 lg:p-10">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
            <User size={34} />
          </div>

          <div>
            <p className="text-sm text-slate-500">Patient Profile</p>
            <h1 className="text-3xl font-bold">Rahul Sharma</h1>
            <p className="mt-1 text-sm text-slate-500">
              Patient ID: PT-1001
            </p>
          </div>

          <span className="rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-400 sm:ml-auto">
            Low Risk
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={<User size={20} />}
            title="Personal Information"
          >
            <Info label="Age" value="42 years" />
            <Info label="Gender" value="Male" />
            <Info label="Patient ID" value="PT-1001" />
          </InfoCard>

          <InfoCard
            icon={<HeartPulse size={20} />}
            title="Health Overview"
          >
            <Info label="Diabetes Status" value="Type 2" />
            <Info label="Risk Level" value="Low" />
            <Info label="Last Screening" value="Today" />
          </InfoCard>

          <InfoCard
            icon={<CalendarDays size={20} />}
            title="Appointments"
          >
            <Info label="Next Visit" value="18 Oct 2026" />
            <Info label="Doctor" value="Dr. Sharma" />
            <Info label="Status" value="Confirmed" />
          </InfoCard>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-6 flex items-center gap-3">
            <Activity className="text-cyan-400" />
            <div>
              <h2 className="font-semibold">Screening History</h2>
              <p className="text-xs text-slate-500">
                Previous retinal assessments
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <History id="RC-1042" date="08 Oct 2026" risk="Low Risk" />
            <History id="RC-0912" date="15 Jul 2026" risk="Low Risk" />
            <History id="RC-0741" date="10 Apr 2026" risk="Moderate Risk" />
          </div>
        </div>
      </main>
    </div>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="text-cyan-400">{icon}</div>
        <h2 className="font-semibold">{title}</h2>
      </div>

      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between border-b border-slate-800 pb-3 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function History({ id, date, risk }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
      <div className="flex items-center gap-3">
        <FileImage className="text-cyan-400" size={19} />
        <div>
          <p className="text-sm font-medium">{id}</p>
          <p className="text-xs text-slate-600">{date}</p>
        </div>
      </div>

      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
        {risk}
      </span>
    </div>
  );
}

export default PatientProfile;