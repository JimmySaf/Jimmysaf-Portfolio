import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      <ScrollToTop />

    </div>
  );
};

export default Home;