import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      company: "Softvance IT Ltd. — Mohakhali, Dhaka",
      role: "Mobile Application Developer (Kotlin)",
      period: "August 2024 – Present",
      type: "Kotlin",
      description:
        "Developing and maintaining native Android applications using Kotlin and the Android SDK.",
      responsibilities: [
        "Building responsive Android apps with Kotlin, Jetpack components, and MVVM architecture.",
        "Integrating REST APIs with Retrofit and handling asynchronous work with Kotlin Coroutines.",
        "Managing app data with Room Database and local storage.",
        "Testing, debugging, and maintaining applications published on Google Play.",
      ],
    },
    {
      company: "Opus Technology Limited — Kakrail, Dhaka",
      role: "Mobile Application Developer (Flutter)",
      period: "2023 – 2024",
      type: "Flutter",
      description:
        "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
      responsibilities: [
        "Implemented application state management with GetX and Provider.",
        "Integrated REST APIs and collaborated with design and backend teams.",
        "Published and maintained mobile applications for users.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-10 md:px-10 lg:px-12"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            My professional journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            Professional experience building native Android and cross-platform
            mobile applications.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative md:pl-16"
              >

                {/* Timeline Icon */}
                <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 text-lg text-cyan-400 md:flex">
                  <FiBriefcase />
                </div>

                {/* Experience Card */}
                <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-950/20 md:p-8">

                  {/* Top */}
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-base font-medium text-cyan-400">
                        {experience.company}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FiCalendar className="text-cyan-400" />
                      {experience.period}
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6 border-t border-slate-800 pt-6">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Key Responsibilities
                    </h4>

                    <div className="space-y-3">
                      {experience.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <FiCheckCircle className="mt-1 shrink-0 text-cyan-400" />

                          <p className="text-sm leading-6 text-slate-500">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;