function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React JS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["PHP", "C#", ".NET"],
    },
    {
      title: "Database",
      skills: ["MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "MS Office"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 font-medium tracking-wide uppercase">
            What I Know
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I've been learning and using to build
            responsive and modern web applications.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-semibold mb-5">
                {category.title}
              </h3>

              <div className="w-10 h-1 bg-cyan-400 rounded-full mb-6"></div>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="bg-slate-800 border border-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;