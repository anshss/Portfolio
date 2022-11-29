import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from '../styles/Component.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}