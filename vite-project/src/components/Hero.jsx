import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>

            <p className="text-cyan-400 text-lg font-medium mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Aliza
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
              Software Engineering Student
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
              Passionate about building modern, responsive and user-friendly
              web applications using React JS while continuously learning new
              technologies and improving my development skills.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/cv.pdf"
                download="CV.pdf"
                className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Alizah"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;