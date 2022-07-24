import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright © {new Date().getFullYear()} The Rage Lab
    </footer>
  )
}

export default Footer;
