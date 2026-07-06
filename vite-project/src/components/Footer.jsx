function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Aliza Arshad<span className="text-cyan-400">.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Aspiring Full Stack Developer
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

      </div>
      

      <div className="border-t border-slate-800 py-5">
        <p className="text-center text-gray-500 text-sm">
          © {year} Aliza Arshad. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;