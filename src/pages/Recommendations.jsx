import {
  Activity,
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  Droplets,
  Dumbbell,
  Eye,
  HeartPulse,
  Lightbulb,
  Moon,
  ShieldCheck,
  Utensils,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Recommendations() {
  const navigate = useNavigate();

  const recommendations = [
    {
      icon: Eye,
      title: "Regular Eye Screenings",
      description:
        "Follow a regular retinal screening schedule recommended by your healthcare professional.",
      priority: "High Priority",
      color: "cyan",
    },
    {
      icon: Activity,
      title: "Stay Physically Active",
      description:
        "Maintain regular physical activity that is appropriate for your health and fitness level.",
      priority: "Recommended",
      color: "emerald",
    },
    {
      icon: Utensils,
      title: "Maintain a Balanced Diet",
      description:
        "Follow a balanced eating plan and the nutritional guidance provided by your healthcare professional.",
      priority: "Recommended",
      color: "amber",
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description:
        "Maintain adequate hydration throughout the day unless your healthcare provider advises otherwise.",
      priority: "Lifestyle",
      color: "blue",
    },
    {
      icon: Moon,
      title: "Maintain Healthy Sleep",
      description:
        "Try to maintain a consistent sleep routine and get adequate rest each night.",
      priority: "Lifestyle",
      color: "violet",
    },
    {
      icon: CalendarCheck,
      title: "Follow Your Screening Schedule",
      description:
        "Keep track of previous screenings and follow the next screening date recommended by your healthcare provider.",
      priority: "Important",
      color: "rose",
    },
  ];

  const colors = {
    cyan: {
      box: "bg-cyan-400/10",
      icon: "text-cyan-400",
      border: "hover:border-cyan-400/30",
    },
    emerald: {
      box: "bg-emerald-400/10",
      icon: "text-emerald-400",
      border: "hover:border-emerald-400/30",
    },
    amber: {
      box: "bg-amber-400/10",
      icon: "text-amber-400",
      border: "hover:border-amber-400/30",
    },
    blue: {
      box: "bg-blue-400/10",
      icon: "text-blue-400",
      border: "hover:border-blue-400/30",
    },
    violet: {
      box: "bg-violet-400/10",
      icon: "text-violet-400",
      border: "hover:border-violet-400/30",
    },
    rose: {
      box: "bg-rose-400/10",
      icon: "text-rose-400",
      border: "hover:border-rose-400/30",
    },
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
                <Lightbulb
                  size={25}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <h1 className="text-3xl font-bold">
                  Recommendations
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Health guidance and recommendations for your eye care.
                </p>

              </div>

            </div>

          </div>

          {/* AI Summary */}
          <section className="mb-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-slate-950 p-6 sm:p-8">

            <div className="flex flex-col gap-6 md:flex-row md:items-center">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10">
                <HeartPulse
                  size={28}
                  className="text-cyan-400"
                />
              </div>

              <div>

                <div className="mb-2 flex flex-wrap items-center gap-2">

                  <h2 className="text-xl font-bold">
                    Your Health Guidance
                  </h2>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-medium text-cyan-400">
                    AI ASSISTED
                  </span>

                </div>

                <p className="max-w-3xl text-sm leading-6 text-slate-400">
                  Based on your screening history, maintaining regular
                  eye screenings and a healthy lifestyle can support
                  your long-term eye health.
                </p>

              </div>

            </div>

          </section>

          {/* Recommendations */}
          <section className="mb-8">

            <div className="mb-5">

              <h2 className="text-xl font-semibold">
                Recommended Actions
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Suggested actions to help maintain your overall health.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {recommendations.map((item) => {

                const Icon = item.icon;
                const style = colors[item.color];

                return (
                  <div
                    key={item.title}
                    className={`rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition ${style.border}`}
                  >

                    <div className="flex gap-4">

                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.box}`}
                      >
                        <Icon
                          size={22}
                          className={style.icon}
                        />
                      </div>

                      <div className="flex-1">

                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">

                          <h3 className="font-semibold">
                            {item.title}
                          </h3>

                          <span className="rounded-full bg-slate-800 px-3 py-1 text-[10px] text-slate-400">
                            {item.priority}
                          </span>

                        </div>

                        <p className="text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </section>

          {/* Healthy Habits */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-xl bg-emerald-400/10 p-3">
                <ShieldCheck
                  size={20}
                  className="text-emerald-400"
                />
              </div>

              <div>

                <h2 className="font-semibold">
                  Healthy Habits
                </h2>

                <p className="text-xs text-slate-500">
                  Simple habits that can support your overall wellbeing.
                </p>

              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">

                <CheckCircle2
                  size={19}
                  className="mb-3 text-emerald-400"
                />

                <p className="text-sm font-medium">
                  Monitor Blood Sugar
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Follow your healthcare provider's monitoring plan.
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">

                <Dumbbell
                  size={19}
                  className="mb-3 text-cyan-400"
                />

                <p className="text-sm font-medium">
                  Stay Active
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Maintain physical activity appropriate for you.
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">

                <Utensils
                  size={19}
                  className="mb-3 text-amber-400"
                />

                <p className="text-sm font-medium">
                  Eat Mindfully
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Follow a balanced eating plan.
                </p>

              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">

                <CalendarCheck
                  size={19}
                  className="mb-3 text-violet-400"
                />

                <p className="text-sm font-medium">
                  Don't Miss Screenings
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Keep your eye screening schedule up to date.
                </p>

              </div>

            </div>

          </section>

          {/* Disclaimer */}
          <div className="mt-6 rounded-xl border border-amber-400/10 bg-amber-400/5 p-4">

            <p className="text-xs leading-5 text-slate-500">

              <span className="font-medium text-amber-400">
                Important:
              </span>{" "}

              These recommendations are for general health guidance.
              They do not replace professional medical advice,
              diagnosis, or treatment.

            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Recommendations;