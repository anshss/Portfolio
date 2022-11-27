import styles from '../styles/Component.module.scss'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <p>About</p>
            <p>Work</p>
            <p>Contact</p>
            <p>Resume</p>
        </div>
    )
}