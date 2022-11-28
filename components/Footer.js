import styles from '../styles/Component.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function Footer() {
    return(
        <div className={styles.footer} id="footer">
            <div className={styles.icons}>
                <Link href='https://github.com/anshss'><GitHubIcon fontSize="large" /></Link>
                <Link href='https://twitter.com/anshstwt'><TwitterIcon fontSize="large" /></Link>
                <Link href='https://www.linkedin.com/in/anshss/'><LinkedInIcon fontSize="large" /></Link>
            </div>
            <p>anshspvt@gmail.com</p>
            <div className={styles.email}>
            </div>
        </div>
    )
}