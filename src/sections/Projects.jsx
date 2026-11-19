
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Motive Entertainment",
    category: "Flutter Application",
    description:
      "A live mobile app delivered for a UK client, bringing a Figma concept to life so users can discover local food and drink deals, venue atmospheres, and trending nearby spots.",
    technologies: ["Flutter", "Dart", "Figma UI Implementation"],
    features: [
      "Discover local food and drink deals",
      "Explore venue atmosphere insights",
      "Find trending nearby places",
      "Modern Figma-based mobile interface",
    ],
    googlePlay: "https://lnkd.in/gN3N8FH2",
    featured: true,
  },
  {
    title: "Journal App & Mood Tracker",
    category: "Flutter Application",
    description:
      "A Flutter app taken from Figma design to production, with a focus on maintainable code, reusable widgets, and performance optimization.",
    technologies: ["Flutter", "Dart", "Reusable Widgets"],
    features: [
      "Journal entries",
      "Mood tracking",
      "Reusable Flutter widgets",
      "Performance-focused implementation",
    ],
    googlePlay: "https://lnkd.in/gZw6cKMi",
  },
];

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="bg-slate-950 px-4 py-10 sm:px-6 sm:py-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Mobile Applications
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Flutter applications built from design through deployment,
            with a focus on thoughtful interfaces and reliable performance.
          </p>
        </motion.div>

        {/* Featured project */}
        {featuredProjects.map((project) => (
          <div key={project.title} className="mb-10">
            <ProjectCard project={project} featured />
          </div>
        ))}

        {/* Other projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center sm:mt-16"
        >
          <p className="mb-5 text-sm text-slate-400 sm:text-base">
            Want to see more of my projects?
          </p>

          <a
            href="https://github.com/HiraAshrafi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-cyan-400/40 px-5 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950 sm:text-base"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
