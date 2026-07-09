import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          Aliza Arshad
        </h1>

        <ul className="hidden md:flex items-center gap-6">

          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setActive(link)}
              className={`transition duration-300 capitalize font-medium
${
  active === link
    ? "text-cyan-400"
    : "text-white hover:text-cyan-400"
}`}
              >
                {link}
              </a>
            </li>
          ))}

        </ul>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 py-5">

          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`block text-center py-3 capitalize transition
              ${
                active === link
                  ? "text-cyan-400 font-semibold"
                  : "text-white hover:text-cyan-400"
              }`}
            >
              {link}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;