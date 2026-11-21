import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiAward } from "react-icons/fi";

const featuredAchievements = [
  {
    title: "Diploma in Engineering",
    subtitle: "BTEB · Computer Technology",
    image: "/images/achievements/diploma-certificate.jpg",
  },
  {
    title: "PHP with Laravel",
    subtitle: "PencilBox Training Institute",
    image: "/images/achievements/php-laravel-certificate.jpg",
  },
  {
    title: "Professional English",
    subtitle: "Workplace Skills Academy",
    image: "/images/achievements/english-communication-certificate.jpg",
  },
];

const Achievements = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="achievements"
      className="relative overflow-hidden border-y border-slate-900/80 bg-slate-950 px-4 py-20 sm:px-6 lg:px-12"
    >
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 flex flex-col items-center text-center sm:mb-12"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
            <FiAward />
            Certificates & Recognition
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Learning turned into{" "}
            <span className="text-cyan-400">achievement.</span>
          </h2>
        </motion.header>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredAchievements.map((achievement, index) => (
            <motion.a
              href="/achievements"
              key={achievement.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-slate-800 bg-slate-950">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-end justify-between gap-4 p-5">
                <div>
                  <h3 className="font-bold text-white">{achievement.title}</h3>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {achievement.subtitle}
                  </p>
                </div>
                <FiArrowUpRight className="shrink-0 text-lg text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/achievements"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-400/[0.06] px-5 py-3 text-sm font-bold text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            View All Achievements
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
