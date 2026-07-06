function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Here are some of the projects I have worked on during my learning journey.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

            <div className="p-6">

              <h3 className="text-2xl font-semibold">
                Marina-Fleets
              </h3>

              <p className="text-gray-400 mt-3">
                A responsive fleet management website developed using HTML,
                CSS and JavaScript.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  HTML
                </span>

                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  CSS
                </span>

                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  JavaScript
                </span>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/alizah456/marina-fleets"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>
          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
            <div className="p-6">

              <h3 className="text-2xl font-semibold">
                Vaccination Management System
              </h3>

              <p className="text-gray-400 mt-3">
                A web application developed using PHP and MySQL to manage
                vaccination records efficiently.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  PHP
                </span>

                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  MySQL
                </span>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/yourusername/vaccination-system"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>
          <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

            <div className="p-6">

              <h3 className="text-2xl font-semibold">
                ABCD Mall Website
              </h3>

              <p className="text-gray-400 mt-3">
                A responsive shopping mall website developed using ASP.NET,
                C# and SQL Server.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  ASP.NET
                </span>

                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  C#
                </span>

                <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">
                  SQL Server
                </span>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/yourusername/abcd-mall"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;