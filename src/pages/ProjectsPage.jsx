import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pb-20 pt-32 sm:px-6 lg:px-12">
      <div className="pointer-events-none absolute -left-40 top-48 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-blue-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.a
          href="/#projects"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            Project Portfolio
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            All <span className="text-cyan-400">Projects</span>
          </h1>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore the applications, client work, and product details in one
            place. Select any app screen or store button to open its Google Play
            listing.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            {projects.length} projects
          </p>
        </motion.header>

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
      </div>
    </section>
  );
}

export default ProjectsPage;
