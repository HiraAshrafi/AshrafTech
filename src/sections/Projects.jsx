import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            My Project
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Selected <span className="text-cyan-400">Mobile Applications</span>
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A closer look at the apps I’ve designed and built, with real screens
            from Google Play, project details, and the tools behind each release.
          </p>
        </motion.div>

        <div className="space-y-7">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="mb-5 text-sm text-slate-400 sm:text-base">
            Want to see all of my projects?
          </p>
          <a
            href="/projects"
            className="inline-flex items-center rounded-xl border border-cyan-400/40 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            See More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
