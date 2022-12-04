import Link from 'next/link'
import styles from '../styles/Component.module.scss'
import Fade from 'react-reveal/Fade'

export default function Projecs() {
  return (
    <div className={styles.projects} id="projects">
      <h2>02/ &nbsp; &nbsp; Works</h2>
      <div className={styles.block}>
        <img src="gum3road.png" className={styles.image} />
        <Fade right>
          <div className={styles.text}>
            <h3>Gum3road</h3>
            <p>
              This is a platform for digital creators to mint and sell their
              content. These files are then available for purchase by other
              users. Users can login using their web2 socials like Google,
              Facebook etc. They can mint any file as ERC1155 token and set its
              attributes like supply, price and coverimage
            </p>
            <Link href="https://devpost.com/software/gum3road">
              <p className={`${styles.btn} ${styles.hoverUnderline}`}>
                See project
              </p>
            </Link>
            <p className={styles.hackathon}>Hackathon 🏆</p>
          </div>
        </Fade>
      </div>

      <div className={styles.block}>
        <Fade left>
          <div className={styles.text}>
            <h3>Agora</h3>
            <p>
              This is a decentralized version of the Gumroad.com. This is where
              users can login using their wallets. They can mint any file as
              ERC1155 token and set its attributes like supply, price,
              coverimage. These files are then available for purchase by other
              users
            </p>
            <Link href="https://github.com/anubhav11156/agora">
              <p className={`${styles.btn} ${styles.hoverUnderline}`}>
                See project
              </p>
            </Link>
            <p className={styles.hackathon}>Hackathon 🏆</p>
          </div>
        </Fade>
        <img src="agora.png" className={styles.image} />
      </div>

      <div className={styles.block}>
        <img src="simula.png" className={styles.image} />
        <Fade right>
          <div className={styles.text}>
            <h3>Simula</h3>
            <p>
              Get a utility for it at our platform, either giving it as
              collateral and taking some amount in stable coins or lending it to
              us and enjoying some interest monthly. Users can stake their Nfts
              by lending and claim regular interest on them. Users can deposit
              their Nfts as collateral and take 40% of USDT. Users can become
              DAO member to creat, vote on proposal.
            </p>
            <Link href="https://github.com/anshss/hackfall22">
              <p className={`${styles.btn} ${styles.hoverUnderline}`}>
                See project
              </p>
            </Link>
            <p className={styles.hackathon}>Hackathon 🏆</p>
          </div>
        </Fade>
      </div>

      <div className={styles.block}>
        <Fade left>
          <div className={styles.text}>
            <h3>Newee</h3>
            <p>
              Newee is a decentralized news platform working on the Polygon
              blockchain. Here, journalists can post the latest news articles
              for other users to read. Users can sign in with Metamask to access
              the platform.
            </p>
            <Link href="https://github.com/anshss/Newee">
              <p className={`${styles.btn} ${styles.hoverUnderline}`}>
                See project
              </p>
            </Link>
          </div>
        </Fade>
        <img src="newee.png" className={styles.image} />
      </div>

      <div className={styles.block}>
        <img src="react-portfolio.png" className={styles.image} />
        <Fade right>
          <div className={styles.text}>
            <h3>React Portfolio</h3>
            <p>
              Made on React using various packages. This is a short portfolio of
              mine focused more on UI. Used React leaflet to render map and
              location. Used EmailJS for emailing functionality. Forthe 3d tag
              cloud on the about page, I have used react3dtagcloud
            </p>
            <Link href="https://github.com/anshss/ReactProtfolio">
              <p className={`${styles.btn} ${styles.hoverUnderline}`}>
                See project
              </p>
            </Link>
          </div>
        </Fade>
      </div>

      <div className={styles.block}>
        <Fade left>
          <div className={styles.text}>
            <h3>Newsletter</h3>
            <p>
              A newsletter subscription made using Mailchimp API. Users can
              subscribe with their email addresses to the subscription. Their
              addresses would be recorded on Mailchimp. Emails could then be
              sent collectively to them using Mailchimp
            </p>
            <Link href="https://github.com/anshss/Newsletter">
              <p className={`${styles.btn} ${styles.hoverUnderline}`}>
                See project
              </p>
            </Link>
          </div>
        </Fade>
        <img src="newsletter.png" className={styles.image} />
      </div>
    </div>
  )
}
