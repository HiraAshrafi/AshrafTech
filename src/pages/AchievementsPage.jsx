import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowLeft,
  FiAward,
  FiCalendar,
  FiExternalLink,
  FiX,
} from "react-icons/fi";

const achievements = [
  {
    title: "Diploma in Engineering",
    subtitle: "Bangladesh Technical Education Board",
    period: "2021",
    category: "Academic Certificate",
    image: "/images/achievements/diploma-certificate.jpg",
    details:
      "Successfully completed the Four-Year Diploma in Engineering in Computer Technology from National Institute of Engineering & Technology. CGPA: 3.46 out of 4.00.",
  },
  {
    title: "Android Application Development",
    subtitle: "Daftodi International Training Institute",
    period: "2021–2022",
    category: "Professional Certificate",
    image: "/images/achievements/android-development-certificate.jpg",
    details:
      "Completed the Android Application Development professional training and qualified with MD SWKOT ALI. The certificate recognizes participation and successful course completion.",
  },
  {
    title: "Mobile Game & Application Project",
    subtitle: "Digital Bangladesh M Competition",
    period: "27 February 2022",
    category: "Achievement Certificate",
    image: "/images/achievements/mobile-game-certificate.jpg",
    details:
      "Attended a 200-hour mobile application development training program on the cross-platform skill development platform and received this certificate for participation in the Mobile Game and Application Project.",
  },
  {
    title: "PHP with Laravel Framework",
    subtitle: "PencilBox Training Institute",
    period: "18 December 2022",
    category: "Professional Certificate",
    image: "/images/achievements/php-laravel-certificate.jpg",
    details:
      "Awarded for successfully completing the PHP with Laravel Framework training program. Registration No. 0400036037.",
  },
  {
    title: "Professional English Communication",
    subtitle: "Workplace Skills Development Academy",
    period: "20 October 2022",
    category: "Professional Certificate",
    image: "/images/achievements/english-communication-certificate.jpg",
    details:
      "Successfully completed the Professional English Communication Skill training program and achieved Grade A.",
  },
  {
    title: "Machine Learning",
    subtitle: "SkillUP by Simplilearn",
    period: "11 August 2021",
    category: "Online Course",
    pdf: "/images/achievements/machine-learning-certificate.pdf",
    image: null,
    details:
      "Successfully completed the Machine Learning online course. Certificate code: 2772569.",
  },
];

function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  useEffect(() => {
    if (!selectedAchievement) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedAchievement(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedAchievement]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pb-24 pt-32 sm:px-6 lg:px-12">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-52 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[48%] h-96 w-96 rounded-full bg-blue-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.a
          href="/#education"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          <FiArrowLeft />
          Back to portfolio
        </motion.a>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
            <FiAward />
            Certificates & Recognition
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My <span className="text-cyan-400">Achievements</span>
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Academic and professional milestones that reflect my learning,
            training, and practical growth.
          </p>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/65 shadow-xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <button
                type="button"
                onClick={() => setSelectedAchievement(achievement)}
                className="relative block aspect-[4/3] w-full overflow-hidden border-b border-slate-800 bg-slate-950 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-cyan-400"
                aria-label={`View details for ${achievement.title}`}
              >
                {achievement.image ? (
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_15rem)]">
                    <FiAward className="text-5xl text-cyan-300" />
                    <span className="mt-4 text-sm font-semibold text-slate-300">
                      PDF Certificate
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300 backdrop-blur-md">
                  {achievement.category}
                </span>
              </button>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <FiCalendar className="text-cyan-400" />
                  {achievement.period}
                </div>
                <h2 className="mt-3 text-xl font-bold leading-snug text-white">
                  {achievement.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-cyan-300">
                  {achievement.subtitle}
                </p>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
                  {achievement.details}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedAchievement(achievement)}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  View Details
                  <FiExternalLink />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl lg:grid-cols-[1.15fr_0.85fr]"
            >
              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
                aria-label="Close certificate details"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-200 backdrop-blur-md transition hover:border-cyan-300/40 hover:text-cyan-300"
              >
                <FiX />
              </button>

              <div className="max-h-[82vh] overflow-y-auto border-b border-slate-800 bg-slate-950 p-4 sm:p-6 lg:border-b-0 lg:border-r">
                {selectedAchievement.pdf ? (
                  <iframe
                    src={selectedAchievement.pdf}
                    title={selectedAchievement.title}
                    className="h-[75vh] w-full rounded-xl border border-slate-800 bg-white"
                  />
                ) : (
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="mx-auto max-h-[75vh] w-full object-contain"
                  />
                )}
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                  {selectedAchievement.category}
                </span>
                <h2
                  id="achievement-dialog-title"
                  className="mt-5 text-2xl font-bold text-white sm:text-3xl"
                >
                  {selectedAchievement.title}
                </h2>
                <p className="mt-3 font-semibold text-cyan-300">
                  {selectedAchievement.subtitle}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                  <FiCalendar className="text-cyan-400" />
                  {selectedAchievement.period}
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                  {selectedAchievement.details}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedAchievement(null)}
                  className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AchievementsPage;
