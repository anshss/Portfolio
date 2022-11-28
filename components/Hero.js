import styles from '../styles/Component.module.scss'
import Fade from 'react-reveal/Fade'
import TextLoop from 'react-text-loop'

export default function Hero() {
  return (
    <div className={styles.hero} id="hero">
      <Fade bottom>
        <h1>Hello, I&apos;m Ansh</h1>
        <h2>
          <TextLoop interval={100}>
            <span className={styles.domain}>Blockchain</span>
            <span>Smart Contract</span>
            <span>Chainlink</span>
            <span>IPFS</span>
          </TextLoop>
          &nbsp;<span>Developer</span>
        </h2>
      </Fade>
    </div>
  )
}
