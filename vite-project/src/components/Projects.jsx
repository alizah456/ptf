  import { useState } from "react";
import marina from "../assets/marina.png";
import vaccination from "../assets/vaccination.png";
import mall from "../assets/mall.png";
  function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-widest">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Here are some of the projects I have worked on during my learning journey.
          </p>
        </div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
  <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 flex flex-col h-full">

    <img
      src={marina}
      alt="Marina Fleets"
      className="w-full h-52 object-cover"
    />

    <div className="p-6 flex flex-col flex-grow">

      <h3 className="text-2xl font-semibold">
        Marina Fleets
      </h3>

      <p className="text-gray-400 mt-3 leading-7 flex-grow">
        A responsive fleet management website developed using HTML, CSS and JavaScript with multiple pages, fleet categories and responsive design.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">HTML</span>
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">CSS</span>
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">JavaScript</span>
      </div>

      <div className="flex gap-3 mt-auto pt-6">

        <button
          onClick={() =>
            setSelectedProject({
              title: "Marina Fleets",
              description:
                "A responsive fleet management website with luxury, sailing and fishing ship pages, gallery, contact page and modern responsive UI.",
            })
          }
          className="flex-1 bg-cyan-400 text-slate-950 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          View Details
        </button>

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
  <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 flex flex-col h-full">

    <img
      src={vaccination}
      alt="Vaccination"
      className="w-full h-52 object-cover"
    />

    <div className="p-6 flex flex-col flex-grow">

      <h3 className="text-2xl font-semibold">
        Vaccination Management System
      </h3>

      <p className="text-gray-400 mt-3 leading-7 flex-grow">
        A PHP and MySQL based web application to manage vaccination records with CRUD functionality and secure database management.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">PHP</span>
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">MySQL</span>
      </div>

      <div className="flex gap-3 mt-auto pt-6">

        <button
          onClick={() =>
            setSelectedProject({
              title: "Vaccination Management System",
              description:
                "This project allows hospitals to manage vaccination records, patients and reports efficiently.",
            })
          }
          className="flex-1 bg-cyan-400 text-slate-950 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          View Details
        </button>

        <a
          href="https://github.com/alizah456/Vaccination_system"
          className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
        >
          GitHub
        </a>

      </div>

    </div>

  </div>
  <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 flex flex-col h-full">

    <img
      src={mall}
      alt="ABCD Mall"
      className="w-full h-52 object-cover"
    />

    <div className="p-6 flex flex-col flex-grow">

      <h3 className="text-2xl font-semibold">
        ABCD Mall Website
      </h3>

      <p className="text-gray-400 mt-3 leading-7 flex-grow">
        A responsive shopping mall website developed using ASP.NET, C# and SQL Server with shopping, movies and food court pages.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">ASP.NET</span>
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">C#</span>
        <span className="bg-slate-800 px-3 py-1 rounded-full text-sm text-cyan-400">SQL Server</span>
      </div>

      <div className="flex gap-3 mt-auto pt-6">

        <button
          onClick={() =>
            setSelectedProject({
              title: "ABCD Mall Website",
              description:
                "A complete shopping mall management website developed in ASP.NET MVC with SQL Server database integration.",
            })
          }
          className="flex-1 bg-cyan-400 text-slate-950 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          View Details
        </button>

        <a
          href="https://github.com/alizah456/ABCD-mall"
          className="flex-1 text-center border border-cyan-400 text-cyan-400 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
        >
          GitHub
        </a>

      </div>

    </div>

  </div>
</div>
</div>
{selectedProject && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-5">
    <div className="bg-slate-900 rounded-2xl p-8 max-w-lg w-full border border-cyan-400">

      <h2 className="text-3xl font-bold text-cyan-400">
        {selectedProject.title}
      </h2>

      <p className="text-gray-300 mt-5 leading-8">
        {selectedProject.description}
      </p>

      <button
        onClick={() => setSelectedProject(null)}
        className="mt-8 w-full bg-cyan-400 text-slate-950 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
      >
        Close
      </button>

    </div>
  </div>
)}
    </section>
  );
}
export default Projects;