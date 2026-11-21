const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 px-5 py-10 text-white sm:px-6">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight">
            Mommad Hira Ashrafi<span className="text-cyan-400">.</span>
          </h3>

          <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-2">

          <a
            href="https://github.com/HiraAshrafi"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-800 px-4 py-2 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="mailto:ashrafiashra038@gmail.com"
            className="rounded-xl border border-slate-800 px-4 py-2 text-sm text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
          >
            Email
          </a>

        </div>

      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-slate-800 pt-5 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Mommad Hira Ashrafi. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;