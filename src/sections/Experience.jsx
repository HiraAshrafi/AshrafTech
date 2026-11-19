import { motion, useReducedMotion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiImage,
  FiMapPin,
} from "react-icons/fi";

const opusPhotos = [
  {
    src: "/images/experience/opus/office-team.jpg",
    alt: "Team posing for a group photo in the Opus Technology office",
    caption: "Office team",
  },
  {
    src: "/images/experience/opus/exhibition-team.webp",
    alt: "Opus Technology team at a company exhibition booth",
    caption: "Company booth",
  },
  {
    src: "/images/experience/opus/team-event.jpg",
    alt: "Colleagues gathered for a team event at Opus Technology",
    caption: "Team event",
  },
  {
    src: "/images/experience/opus/team-refreshments.jpg",
    alt: "Refreshments prepared for an Opus Technology team gathering",
    caption: "Team gathering",
  },
  {
    src: "/images/experience/opus/team-conversation.jpg",
    alt: "Opus colleagues talking during a team lunch",
    caption: "Team lunch",
  },
  {
    src: "/images/experience/opus/team-gathering.jpg",
    alt: "Opus Technology colleagues together at a team gathering",
    caption: "Team photo",
  },
  {
    src: "/images/experience/opus/team-lunch.jpg",
    alt: "Colleague holding a plate at the Opus team lunch",
    caption: "Lunch gathering",
  },
  {
    src: "/images/experience/opus/team-celebration.jpg",
    alt: "Opus colleagues celebrating around a cake",
    caption: "Team celebration",
  },
];

const experiences = [
  {
    company: "Softvance IT Ltd.",
    location: "Mohakhali, Dhaka",
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
    company: "Opus Technology Limited",
    location: "Kakrail, Dhaka",
    role: "Mobile Application Developer (Flutter)",
    period: "2023 – 2024",
    type: "Flutter",
    gallery: opusPhotos,
    description:
      "Developed and maintained cross-platform mobile applications using Flutter and Dart.",
    responsibilities: [
      "Implemented application state management with GetX and Provider.",
      "Integrated REST APIs and collaborated with design and backend teams.",
      "Published and maintained mobile applications for users.",
    ],
  },
];

const galleryGradients = [
  "from-cyan-400/20 via-sky-400/5 to-slate-950",
  "from-blue-400/20 via-indigo-400/5 to-slate-950",
  "from-teal-300/15 via-cyan-400/5 to-slate-950",
];

function OfficeGallery({ company, photos = [] }) {
  return (
    <div
      role="group"
      aria-label={`Office and team photo gallery for ${company}`}
      className="mt-5"
    >
      {photos.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <a
              key={photo.src}
              href={photo.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full-size photo: ${photo.alt}`}
              className={`group/photo relative min-w-0 overflow-hidden rounded-xl border border-white/[0.08] bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/10 opacity-80 transition-opacity group-hover/photo:opacity-100"
              />
              <span className="absolute inset-x-2 bottom-2 truncate text-[9px] font-medium text-white sm:text-[10px]">
                {photo.caption}
              </span>
            </a>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {galleryGradients.map((gradient, index) => (
            <div
              key={gradient}
              aria-hidden="true"
              className={`relative h-24 overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-br ${gradient} sm:h-28`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:15px_15px] opacity-40" />
              <span className="absolute right-2 top-2 font-mono text-[9px] tracking-widest text-white/45">
                0{index + 1}
              </span>
              <div className="absolute inset-x-2 bottom-0 flex h-14 items-end justify-center gap-1">
                <span className="h-7 w-5 rounded-t-sm border border-white/10 bg-slate-950/40" />
                <span className="h-11 w-7 rounded-t-sm border border-white/10 bg-slate-950/55" />
                <span className="h-8 w-5 rounded-t-sm border border-white/10 bg-slate-950/45" />
                <span className="h-5 w-4 rounded-t-sm border border-white/10 bg-slate-950/35" />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-300">
          <FiImage className="text-cyan-300" aria-hidden="true" />
          Office &amp; team gallery
        </span>
        <span className="rounded-full border border-slate-700/80 bg-slate-950/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
          {photos.length > 0
            ? `${photos.length} photos`
            : "Photos coming soon"}
        </span>
      </div>
    </div>
  );
}

const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-12"
    >
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 20, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-3xl"
      />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
            <FiBriefcase aria-hidden="true" />
            Career Journey
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Growing through{" "}
            <span className="block text-cyan-400">meaningful work.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A look at the roles, teams, and places that have shaped my work in
            mobile application development.
          </p>
          <motion.div
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 }}
            className="mx-auto mt-6 h-1 w-16 origin-center rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
          />
        </motion.header>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-cyan-400/60 via-slate-700 to-transparent sm:left-[21px]"
          />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.99 }
                }
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
                }
                viewport={{ once: true, amount: 0.16 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                }}
                className="relative pl-10 sm:pl-14"
              >
                <div className="absolute left-0 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] sm:left-1 sm:h-10 sm:w-10">
                  <FiBriefcase aria-hidden="true" />
                </div>

                <div className="group overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/65 shadow-xl shadow-black/20 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/30 hover:shadow-cyan-950/20">
                  <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="p-5 sm:p-8 lg:p-9">
                      <div className="mb-5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1 text-xs font-semibold text-cyan-300">
                          {experience.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/50 px-3 py-1 text-xs text-slate-400">
                          <FiCalendar
                            className="text-cyan-400"
                            aria-hidden="true"
                          />
                          {experience.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                        {experience.role}
                      </h3>
                      <p className="mt-2 text-base font-semibold text-cyan-300">
                        {experience.company}
                      </p>
                      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                        {experience.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-800/90 bg-slate-950/35 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-7">
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300">
                          <FiMapPin aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Office location
                          </p>
                          <address className="mt-1 not-italic text-sm font-medium text-slate-200">
                            {experience.location}
                          </address>
                        </div>
                      </div>
                      <OfficeGallery
                        company={experience.company}
                        photos={experience.gallery}
                      />
                    </div>
                  </div>

                  <div className="border-t border-slate-800/90 px-5 py-6 sm:px-8 sm:py-7 lg:px-9">
                    <div className="mb-4 flex items-center gap-2">
                      <FiCheckCircle
                        className="text-cyan-400"
                        aria-hidden="true"
                      />
                      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                        Key responsibilities
                      </h4>
                    </div>
                    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {experience.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-400"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
