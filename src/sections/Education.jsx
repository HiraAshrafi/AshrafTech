import { motion } from "framer-motion";
import { FiAward, FiBookOpen } from "react-icons/fi";

const education = [
  {
    period: "2017 – 2022",
    degree: "Diploma Engineering",
    field: "Computer Engineering",
    institution: "National Institute Engineering",
    icon: FiAward,
  },
  {
    period: "2023",
    degree: "Bachelor's Studies",
    field: "Computer Science",
    institution: "Southeast University",
    icon: FiBookOpen,
  },
];

const Education = () => (
  <section
    id="education"
    className="relative overflow-hidden border-y border-slate-900/80 bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-12"
  >
    <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
    <div className="relative mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
          Academic Background
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Education & <span className="text-cyan-400">Learning</span>
        </h2>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {education.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/30 md:p-8"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-400/5 blur-2xl transition group-hover:bg-cyan-400/10" />
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                  {item.period}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-xl text-cyan-400">
                  <Icon />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">{item.degree}</h3>
              <p className="mt-2 font-medium text-cyan-400">{item.field}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.institution}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Education;
