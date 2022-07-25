import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Copyright © {new Date().getFullYear()} <strong>The Rage Lab</strong></span>
    </footer>
  )
}

export default Footer;
