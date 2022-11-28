import styles from '../styles/Component.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.icons}>
                <Link href='/'><GitHubIcon fontSize="large" /></Link>
                <Link href='/'><TwitterIcon fontSize="large" /></Link>
                <Link href='/'><LinkedInIcon fontSize="large" /></Link>
            </div>
            <p>anshspvt@gmail.com</p>
            <div className={styles.email}>
            </div>
        </div>
    )
}