const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 px-6 pt-10 pb-10 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            My Education
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Education
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400"></div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 md:p-8">
            <p className="mb-2 text-sm font-medium text-cyan-400">
              2017 – 2022
            </p>
            <h3 className="text-2xl font-bold">
              Diploma Engineering (Computer)
            </h3>
            <p className="mt-2 text-lg text-slate-300">
              National Institute Engineering
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 md:p-8">
            <p className="mb-2 text-sm font-medium text-cyan-400">
              2023
            </p>
            <h3 className="text-2xl font-bold">
              Southeast University
            </h3>
          </article>
        </div>

      </div>
    </section>
  );
};

export default Education;