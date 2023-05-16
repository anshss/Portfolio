import styles from "../styles/Component.module.scss";
import TagCloud from "react3dtagcloud";

export default function About() {
    const tagName = [
        "Javscript",
        "SASS",
        "React",
        "Next",
        "Git",
        "Node.js",
        "Solidity",
        "Ether.js",
        "IPFS",
        "Chainlink",
        "Moralis",
        "Lens",
    ];

    return (
        <div className={styles.about} id="about">
            <h2>01/ &nbsp; &nbsp; About</h2>
            <p>
                I&apos;m Ansh Saxena, a 19-year-old computer science programmer.
                I love to code in my free time. I have been in development since
                I graduated my High School. I have explored various fields like
                solving data structures, competitive programming, web
                development, and blockchain. Blockchain is what interests me
                most. I have been making projects for over a now. In addition to
                that, reading finance and books, and watching courses in diverse
                fields give me a fresh perspective on industries, people, and
                life.
            </p>

            <div className={styles.tagcloud}>
                <TagCloud tagName={tagName} />
            </div>
        </div>
    );
}
