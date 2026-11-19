import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { FiArrowUpRight, FiSmartphone } from "react-icons/fi";

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-12"
    >
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -18, 0], y: [0, 20, 0], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
            My Project
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Thoughtful apps.
            <span className="block text-cyan-400">Real-world impact.</span>
          </h2>
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.15 }}
            className="mx-auto mt-5 h-1 w-20 origin-center rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
          />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A closer look at my mobile projects, the real app screens, and the
            details behind each release.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-300">
              <FiSmartphone className="text-cyan-400" />
              {projects.length} featured apps
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-400">
              Flutter · Android · Google Play
            </span>
          </div>
        </motion.div>

        <div className="space-y-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="mt-12 flex flex-col items-center text-center sm:mt-16"
        >
          <p className="mb-5 text-sm text-slate-400 sm:text-base">
            Want to see all of my projects?
          </p>
          <motion.a
            href="/projects"
            whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-400/[0.06] px-5 py-3 text-sm font-semibold text-cyan-200 transition-colors hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            See More Projects
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
