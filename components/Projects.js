import Link from 'next/link'
import styles from '../styles/Component.module.scss'

export default function Projecs() {
    return(
        <div  className={styles.projects}>

            <div className={styles.block}>
                <img src="Screenshot_2022-11-28_at_12.24.36_AM.png" className={styles.image}/>
                <div className={styles.text}>
                    <h3>ProjectName</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <Link href='/'><p className={styles.btn}>See project</p></Link>
                    <p>Hackathon 🏆</p>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.text}>
                    <h3>ProjectName</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <Link href='/'><p className={styles.btn}>See project</p></Link>
                    <p>Hackathon 🏆</p>
                </div>
                <img src="" className={styles.image}/>
            </div>

            <div className={styles.block}>
                <img src="" className={styles.image}/>
                <div className={styles.text}>
                    <h3>ProjectName</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <Link href='/'><p className={styles.btn}>See project</p></Link>
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.text}>
                    <h3>ProjectName</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <Link href='/'><p className={styles.btn}>See project</p></Link>
                </div>
                <img src="" className={styles.image}/>
            </div>

            <div className={styles.block}>
                <img src="" className={styles.image}/>
                <div className={styles.text}>
                    <h3>ProjectName</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <Link href='/'><p className={styles.btn}>See project</p></Link>
                </div>
            </div>

        </div>
        
    )
}