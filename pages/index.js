import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}