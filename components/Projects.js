import Link from "next/link";
import styles from "../styles/Component.module.scss";
import Fade from "react-reveal/Fade";

export default function Projects() {
    return (
        <div className={styles.projects} id="projects">
            <h2>02/ &nbsp; &nbsp; Works</h2>

            <Fade right>
                <div className={styles.block}>
                    <img src="simula.png" className={styles.image} />
                    <div className={styles.text}>
                        <h3>Simula</h3>
                        <p>
                            Provides NFT utility. Users can stake their Nfts in
                            a contract and claim periodic interests powered by
                            DAO. This DAO votes on proposals to lend these Nfts
                            to others. Users can also deposit their Nfts as
                            collateral and borrow 40% of USDT.
                        </p>
                        {/* <div className={styles.linksDiv}> */}

                        <a
                            href="https://github.com/anshss/Simula"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                        {/* <a
                            href="https://github.com/anshss/Gatify"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                <img src="./github.svg"></img>
                            </div>
                        </a> */}
                        {/* </div> */}
                        <a
                            href="https://devpost.com/software/simula"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className={`${styles.hackathon} ${styles.hoverUnderlineWhite}`}>Hackathon 🏆</p>
                        </a>
                    </div>
                </div>
            </Fade>

            <Fade left>
                <div className={styles.block}>
                    <div className={styles.text}>
                        <h3>Agora</h3>
                        <p>
                            A marketplace for digital creators to sell their
                            digital content on the blockchain preserving
                            ownership records. Other users on the platform can
                            buy these files. Users can log in using their web2
                            socials like Google etc along with web3 wallets.
                        </p>
                        <a
                            href="https://github.com/anubhav11156/Agora"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                        <a
                            href="https://moralis.io/filecoin-hackathon/winners/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className={`${styles.hackathon} ${styles.hoverUnderlineWhite}`}>Hackathon 🏆</p>
                        </a>
                    </div>
                    <img src="agora.png" className={styles.image} />
                </div>
            </Fade>

            <Fade right>
                <div className={styles.block}>
                    <img src="gum3road.png" className={styles.image} />
                    <div className={styles.text}>
                        <h3>Gum3road</h3>
                        <p>
                            This is a web3 version of Gumroad.com. Here, users
                            can mint ERC1155 Nfts out of any digital files,
                            setting attributes like supply, price and cover
                            image. Then, these Nfts are available for purchase
                            by other users.
                        </p>
                        <a
                            href="https://github.com/anshss/Gum3road"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                        <a
                            href="https://devpost.com/software/gum3road"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className={`${styles.hackathon} ${styles.hoverUnderlineWhite}`}>Hackathon 🏆</p>
                        </a>
                    </div>
                </div>
            </Fade>

            <Fade left>
                <div className={styles.block}>
                    <div className={styles.text}>
                        <h3>The Journals DAO</h3>
                        <p>
                            Science specialists can become members of a DAO by
                            staking crypto and earn by voting on proposals. They
                            can host, schedule and join video conferences on the
                            platform. They can opt to receive on-chain
                            notifications for new proposals. This uses Huddle01
                            and Push protocol.
                        </p>
                        <a
                            href="https://github.com/leetebbs/The-Journals-DAO"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                        <a
                            href="https://ethglobal.com/showcase/the-journals-dao-6rzrn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className={`${styles.hackathon} ${styles.hoverUnderlineWhite}`}>Hackathon 🏆</p>
                        </a>
                    </div>
                    <img src="peer.png" className={styles.image} />
                </div>
            </Fade>

            <Fade right>
                <div className={styles.block}>
                    <img src="eventify.png" className={styles.image} />
                    <div className={styles.text}>
                        <h3>Eventify</h3>
                        <p>
                            A gasless event ticketing platform where users can
                            log in with Gmail, host event tickets and shortlist
                            a list of user emails who can claim these tickets.
                            Shortlisted users can then claim these event
                            tickets. They can then sign a gasless transaction to
                            prove ownership of these tickets at any venue.
                        </p>
                        <a
                            href="https://github.com/Eventifyy/eventify-v2"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                        <a
                            href="https://devpost.com/software/eventify-27gui0?ref_content=user-portfolio&ref_feature=in_progress"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className={`${styles.hackathon} ${styles.hoverUnderlineWhite}`}>Hackathon 🏆</p>
                        </a>
                    </div>
                </div>
            </Fade>

            <Fade left>
                <div className={styles.block}>
                    <div className={styles.text}>
                        <h3>Gatify</h3>
                        <p>
                            This is a platform for digital creators to mint and
                            sell their content. These files are then available
                            for purchase by other users. Users can login using
                            their web2 socials like Google, Facebook etc. They
                            can mint any file as ERC1155 token and set its
                            attributes like supply, price and cover image
                        </p>
                        <a
                            href="https://github.com/anshss/Gatify"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                    </div>
                    <img src="gatify.png" className={styles.image} />
                </div>
            </Fade>

            <Fade right>
                <div className={styles.block}>
                    <img src="newee.png" className={styles.image} />
                    <div className={styles.text}>
                        <h3>Newee</h3>
                        <p>
                            Newee is a decentralized news platform working on
                            the Polygon blockchain. Here, journalists can post
                            their latest news articles for other users to read.
                            Most voted articles appear on highlights. Users can
                            sign in with Metamask to access the platform.
                        </p>
                        <a
                            href="https://github.com/anshss/Newee"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                    </div>
                </div>
            </Fade>

            <Fade left>
                <div className={styles.block}>
                    <div className={styles.text}>
                        <h3>React Portfolio</h3>
                        <p>
                            A React portfolio website using various react
                            packages focused on UI. Used packages like
                            react-leaflet, emailJS, and react3tagcloud along
                            with SCSS.
                        </p>
                        <a
                            href="https://github.com/anshss/ReactProtfolio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                    </div>
                    <img src="react-portfolio.png" className={styles.image} />
                </div>
            </Fade>

            <Fade right>
                <div className={styles.block}>
                    <img src="newsletter.png" className={styles.image} />
                    <div className={styles.text}>
                        <h3>Newsletter</h3>
                        <p>
                            A newsletter subscription made using Mailchimp API.
                            Users can subscribe with their email addresses to
                            the subscription. Their addresses would be recorded
                            on Mailchimp. Emails could then be sent collectively
                            to them using Mailchimp.
                        </p>
                        <a
                            href="https://github.com/anshss/Newsletter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p
                                className={`${styles.btn} ${styles.hoverUnderline}`}
                            >
                                See project
                            </p>
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
