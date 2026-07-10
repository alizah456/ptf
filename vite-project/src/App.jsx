import { lazy, Suspense } from "react";

// Lazy Imports
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-xl">
            Loading...
          </div>
        }
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;