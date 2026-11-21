import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isProjectsPage =
    window.location.pathname.replace(/\/+$/, "") === "/projects";
  const isAchievementsPage =
    window.location.pathname.replace(/\/+$/, "") === "/achievements";
  const [activeSection, setActiveSection] = useState(
    isAchievementsPage
      ? "achievements"
      : isProjectsPage
        ? "projects"
        : "home",
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const homePath = isProjectsPage ? "/" : "";
  const navLinks = useMemo(
    () =>
      links.map((link) =>
        link.id === "achievements"
          ? { ...link, href: "/achievements" }
          : { ...link, href: `${homePath}#${link.id}` },
      ),
    [homePath],
  );

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const hash = new URL(link.href, window.location.href).hash;
        return hash ? document.querySelector(hash) : null;
      })
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const handleMenuKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 sm:px-5 ${
        isScrolled ? "pt-1.5" : "pt-2"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        onKeyDown={handleMenuKeyDown}
        className={`mx-auto max-w-[1320px] overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300 ${
          isScrolled
            ? "border-slate-700/80 bg-slate-950/95 shadow-[0_14px_45px_rgba(0,0,0,0.42)]"
            : "border-white/10 bg-slate-950/75 shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-7 ${
            isScrolled ? "h-[60px] lg:h-[66px]" : "h-[66px] lg:h-[72px]"
          }`}
        >
          <a
            href={`${homePath}#home`}
            onClick={closeMenu}
            className="group inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-xs font-bold tracking-wide text-cyan-300 transition-colors group-hover:border-cyan-300/40 group-hover:bg-cyan-400/15">
              HA
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold tracking-tight text-white sm:text-base">
                Mommad Hira Ashrafi
              </span>
              <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 sm:block">
                Software Engineer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-xl px-3 py-2 text-[13px] font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                    isActive
                      ? "bg-white/[0.06] text-cyan-300"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-x-3 -bottom-px h-px bg-cyan-300"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`${homePath}#contact`}
              className="hidden items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_5px_20px_rgba(34,211,238,0.12)] transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:inline-flex"
            >
              Let&apos;s Talk
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 xl:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: -70, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 70, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  className="flex"
                >
                  {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden xl:hidden"
            >
              <div className="border-t border-white/10 px-3 pb-4 pt-3 sm:px-5">
                <div className="grid gap-1 sm:grid-cols-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.id}
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={isActive ? "location" : undefined}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                          isActive
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        {link.name}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        )}
                      </a>
                    );
                  })}
                </div>
                <a
                  href={`${homePath}#contact`}
                  onClick={closeMenu}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:hidden"
                >
                  Let&apos;s Talk
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
