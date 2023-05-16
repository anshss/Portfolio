import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import styles from '../styles/Component.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}