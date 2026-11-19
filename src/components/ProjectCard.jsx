import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight, FiCheck, FiUser } from "react-icons/fi";

function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative grid overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/30 lg:grid-cols-2"
    >
      <a
        href={project.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} screenshots and app listing on Google Play`}
        className="relative block min-w-0 overflow-hidden border-b border-slate-800 bg-slate-950 p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 sm:p-7 lg:border-b-0 lg:border-r"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(8,145,178,0.2),transparent_65%)]" />
        <div className="relative z-10 flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
            App Screens
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-[10px] font-medium text-slate-300 sm:text-xs">
            <FaGooglePlay className="text-green-400" />
            On Google Play
          </span>
        </div>

        <div className="relative z-10 mt-5 flex min-h-[280px] items-center justify-center gap-2 sm:min-h-[350px] sm:gap-4 lg:min-h-[390px]">
          {project.screenshots.map((screenshot, index) => (
            <motion.img
              key={screenshot.src}
              src={screenshot.src}
              alt={`${project.title}: ${screenshot.alt}`}
              loading="lazy"
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.25 }}
              className="h-auto max-h-[320px] w-[31%] max-w-[170px] rounded-[1.15rem] object-contain drop-shadow-[0_20px_28px_rgba(0,0,0,0.45)] sm:max-h-[350px] lg:max-h-[380px]"
              style={{ zIndex: project.screenshots.length - index }}
            />
          ))}
        </div>
        <span className="relative z-10 mt-2 inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors group-hover:text-cyan-300">
          View app listing <FiArrowUpRight />
        </span>
      </a>

      <div className="relative flex min-w-0 flex-col p-6 sm:p-8 lg:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            <FiUser className="text-cyan-400" />
            Client
          </div>
          <p className="mt-2 font-semibold text-white">{project.client}</p>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            {project.clientDetails}
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-white">Project highlights</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm leading-6 text-slate-400"
              >
                <FiCheck className="mt-1 shrink-0 text-cyan-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-white">Built with</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-7">
          <a
            href={project.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <FaGooglePlay />
            View on Google Play
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
