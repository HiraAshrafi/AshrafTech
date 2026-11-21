import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";
import { useEffect } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import ProjectsPage from "./pages/ProjectsPage";
import AchievementsPage from "./pages/AchievementsPage";
import Achievements from "./sections/Achievements";

function App() {
  const isProjectsPage =
    window.location.pathname.replace(/\/+$/, "") === "/projects";
  const isAchievementsPage =
    window.location.pathname.replace(/\/+$/, "") === "/achievements";
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);
  const smoothX = useSpring(cursorX, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(cursorY, { stiffness: 180, damping: 24 });

  useEffect(() => {
    const moveCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    window.addEventListener("pointermove", moveCursor, { passive: true });
    return () => window.removeEventListener("pointermove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <a
        href="#home"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950 shadow-xl transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        style={{ scaleX: progress }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[60] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-3xl lg:block"
        style={{ left: smoothX, top: smoothY }}
      />
      <Navbar />

      <main>
        {isProjectsPage ? (
          <ProjectsPage />
        ) : isAchievementsPage ? (
          <AchievementsPage />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Education />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;