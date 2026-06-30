function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
          <p className="text-gray-400 mt-3">
            Get to know a little about me.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              Hello, I'm <span className="text-cyan-400">Alizah</span>
            </h3>

            <p className="text-gray-300 leading-8 mb-5">
              I'm a Software Engineering student with a passion for web
              development and building modern, responsive websites. I enjoy
              turning ideas into clean, user-friendly digital experiences
              using modern technologies.
            </p>

            <p className="text-gray-300 leading-8">
              I'm always eager to learn new technologies, improve my skills,
              and work on projects that help me grow as a developer.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700">

            <div className="space-y-6">

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-cyan-400">Name</span>
                <span className="text-gray-300">Aliza</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-cyan-400">Location</span>
                <span className="text-gray-300">Karachi, Pakistan</span>
              </div>

              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-cyan-400">Education</span>
                <span className="text-gray-300">
                  ADSE – Aptech (In Progress)
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-700 pb-3">
                <span className="font-semibold text-cyan-400">Languages</span>
                <span className="text-gray-300">English · Urdu</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );

}

export default About;