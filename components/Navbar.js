import styles from '../styles/Component.module.scss'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <a href="#hero"><p>ANSH SAXENA</p></a>
            <div className={styles.sidebtns} >
                <a href="#about"><p className={styles.hoverUnderline}>About</p></a>
                <a href="#projects"><p className={styles.hoverUnderline}>Work</p></a>
                <a href="#footer"><p className={styles.hoverUnderline}>Contact</p></a>
                <a><p className={styles.hoverUnderline}>Resume</p></a>
            </div>
        </div>
    )
}