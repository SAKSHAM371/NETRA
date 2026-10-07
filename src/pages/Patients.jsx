import {
  Activity,
  AlertCircle,
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Eye,
  Search,
  ShieldAlert,
  User,
  Users,
} from "lucide-react";

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function Patients() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const patients = [
    {
      id: "PT-2048",
      name: "Rahul Sharma",
      age: 52,
      gender: "Male",
      disease: "Severe Diabetic Retinopathy",
      stage: "Severe DR",
      risk: "High",
      lastScreening: "07 Oct 2026",
      status: "Urgent",
    },
    {
      id: "PT-2047",
      name: "Priya Verma",
      age: 46,
      gender: "Female",
      disease: "Mild Diabetic Retinopathy",
      stage: "Mild DR",
      risk: "Medium",
      lastScreening: "06 Oct 2026",
      status: "Monitoring",
    },
    {
      id: "PT-2046",
      name: "Amit Kumar",
      age: 61,
      gender: "Male",
      disease: "No Diabetic Retinopathy",
      stage: "No DR",
      risk: "Low",
      lastScreening: "05 Oct 2026",
      status: "Healthy",
    },
    {
      id: "PT-2045",
      name: "Neha Singh",
      age: 39,
      gender: "Female",
      disease: "Moderate Diabetic Retinopathy",
      stage: "Moderate DR",
      risk: "Medium",
      lastScreening: "04 Oct 2026",
      status: "Monitoring",
    },
    {
      id: "PT-2044",
      name: "Vikas Gupta",
      age: 57,
      gender: "Male",
      disease: "No Diabetic Retinopathy",
      stage: "No DR",
      risk: "Low",
      lastScreening: "03 Oct 2026",
      status: "Healthy",
    },
    {
      id: "PT-2043",
      name: "Anjali Mehta",
      age: 49,
      gender: "Female",
      disease: "Severe Diabetic Retinopathy",
      stage: "Severe DR",
      risk: "High",
      lastScreening: "02 Oct 2026",
      status: "Urgent",
    },
    {
      id: "PT-2042",
      name: "Rohit Malhotra",
      age: 44,
      gender: "Male",
      disease: "Mild Diabetic Retinopathy",
      stage: "Mild DR",
      risk: "Medium",
      lastScreening: "01 Oct 2026",
      status: "Monitoring",
    },
    {
      id: "PT-2041",
      name: "Sneha Kapoor",
      age: 35,
      gender: "Female",
      disease: "No Diabetic Retinopathy",
      stage: "No DR",
      risk: "Low",
      lastScreening: "29 Sep 2026",
      status: "Healthy",
    },
  ];

  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        patient.name.toLowerCase().includes(searchText) ||
        patient.id.toLowerCase().includes(searchText) ||
        patient.disease.toLowerCase().includes(searchText);

      const matchesFilter =
        filter === "All" || patient.risk === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const getRiskStyle = (risk) => {
    if (risk === "High") {
      return "border-red-400/20 bg-red-400/10 text-red-400";
    }

    if (risk === "Medium") {
      return "border-amber-400/20 bg-amber-400/10 text-amber-400";
    }

    return "border-emerald-400/20 bg-emerald-400/10 text-emerald-400";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="lg:ml-64">

        <div className="mx-auto max-w-7xl p-5 sm:p-7 lg:p-9">

          {/* Header */}
          <div className="mb-9">

            <button
              onClick={() => navigate("/user-dashboard")}
              className="mb-5 flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </button>

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                <Users
                  size={25}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  Patients
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  View patients and monitor their diabetic
                  retinopathy status.
                </p>
              </div>

            </div>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">

              <div className="mb-4 flex items-center justify-between">

                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                  <Users size={21} />
                </div>

                <span className="text-xs text-slate-500">
                  Total
                </span>

              </div>

              <p className="text-sm text-slate-400">
                Total Patients
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                1,248
              </h2>

            </div>

            <div className="rounded-2xl border border-emerald-400/10 bg-slate-900/60 p-5">

              <div className="mb-4 flex items-center justify-between">

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-400">
                  <CheckCircle2 size={21} />
                </div>

                <span className="text-xs text-emerald-400">
                  Low Risk
                </span>

              </div>

              <p className="text-sm text-slate-400">
                Healthy Patients
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                982
              </h2>

            </div>

            <div className="rounded-2xl border border-amber-400/10 bg-slate-900/60 p-5">

              <div className="mb-4 flex items-center justify-between">

                <div className="rounded-xl bg-amber-400/10 p-3 text-amber-400">
                  <Activity size={21} />
                </div>

                <span className="text-xs text-amber-400">
                  Monitor
                </span>

              </div>

              <p className="text-sm text-slate-400">
                Medium Risk
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                239
              </h2>

            </div>

            <div className="rounded-2xl border border-red-400/10 bg-slate-900/60 p-5">

              <div className="mb-4 flex items-center justify-between">

                <div className="rounded-xl bg-red-400/10 p-3 text-red-400">
                  <ShieldAlert size={21} />
                </div>

                <span className="text-xs text-red-400">
                  Urgent
                </span>

              </div>

              <p className="text-sm text-slate-400">
                High Risk
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                27
              </h2>

            </div>

          </div>

          {/* Patients Table */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60">

            {/* Search + Filter */}
            <div className="border-b border-slate-800 p-5 sm:p-6">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="relative w-full lg:max-w-md">

                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search patient, ID or disease..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/40"
                  />

                </div>

                <div className="flex gap-2 overflow-x-auto">

                  {["All", "Low", "Medium", "High"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                          filter === item
                            ? "bg-cyan-400 text-slate-950"
                            : "border border-slate-800 bg-slate-950 text-slate-400 hover:text-white"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}

                </div>

              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">

              <table className="w-full min-w-[1050px]">

                <thead>
                  <tr className="border-b border-slate-800 text-left">

                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Patient
                    </th>

                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Age / Gender
                    </th>

                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Disease
                    </th>

                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Risk
                    </th>

                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Last Screening
                    </th>

                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                      Action
                    </th>

                  </tr>
                </thead>

                <tbody>

                  {filteredPatients.length > 0 ? (
                    filteredPatients.map((patient) => (
                      <tr
                        key={patient.id}
                        className="border-b border-slate-800/70 transition hover:bg-slate-800/30"
                      >

                        {/* Patient */}
                        <td className="px-6 py-5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                              <User size={18} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold">
                                {patient.name}
                              </p>

                              <p className="mt-1 text-xs text-slate-500">
                                {patient.id}
                              </p>
                            </div>

                          </div>

                        </td>

                        {/* Age/Gender */}
                        <td className="px-6 py-5">

                          <p className="text-sm text-slate-300">
                            {patient.age} years
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {patient.gender}
                          </p>

                        </td>

                        {/* Disease */}
                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2">

                            <Eye
                              size={16}
                              className="text-cyan-400"
                            />

                            <div>
                              <p className="text-sm text-slate-300">
                                {patient.disease}
                              </p>

                              <p className="mt-1 text-xs text-slate-500">
                                {patient.stage}
                              </p>
                            </div>

                          </div>

                        </td>

                        {/* Risk */}
                        <td className="px-6 py-5">

                          <span
                            className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${getRiskStyle(
                              patient.risk
                            )}`}
                          >
                            {patient.risk}
                          </span>

                        </td>

                        {/* Last Screening */}
                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-sm text-slate-400">

                            <CalendarDays size={15} />

                            {patient.lastScreening}

                          </div>

                        </td>

                        {/* Status */}
                        <td className="px-6 py-5">

                          <div
                            className={`flex items-center gap-2 text-sm font-medium ${
                              patient.status === "Urgent"
                                ? "text-red-400"
                                : patient.status === "Monitoring"
                                ? "text-amber-400"
                                : "text-emerald-400"
                            }`}
                          >

                            {patient.status === "Urgent" ? (
                              <AlertCircle size={15} />
                            ) : (
                              <CheckCircle2 size={15} />
                            )}

                            {patient.status}

                          </div>

                        </td>

                        {/* Details */}
                        <td className="px-6 py-5">

                          <button
                            onClick={() =>
                              navigate(
                                `/patients/${patient.id}`
                              )
                            }
                            className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                          >
                            View Details
                          </button>

                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-16 text-center"
                      >

                        <Users
                          size={35}
                          className="mx-auto mb-3 text-slate-700"
                        />

                        <p className="font-medium text-slate-400">
                          No patients found
                        </p>

                        <p className="mt-1 text-sm text-slate-600">
                          Try changing your search or filter.
                        </p>

                      </td>
                    </tr>
                  )}

                </tbody>

              </table>
            </div>

            {/* Footer */}
            <div className="flex flex-col justify-between gap-3 border-t border-slate-800 px-6 py-4 sm:flex-row sm:items-center">

              <p className="text-xs text-slate-500">
                Showing{" "}
                <span className="text-slate-300">
                  {filteredPatients.length}
                </span>{" "}
                patients
              </p>

              <p className="text-xs text-slate-600">
                Patient data is protected and securely stored.
              </p>

            </div>

          </section>
        </div>
      </main>
    </div>
  );
}

export default Patients;