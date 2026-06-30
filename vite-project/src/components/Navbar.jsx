import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400">
          Aliza Arshad
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400 duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-center py-5 space-y-5">

          <a
            href="#home"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#skills"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#projects"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="block hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;