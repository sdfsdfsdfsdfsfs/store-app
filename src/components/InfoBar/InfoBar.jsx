import styles from './InfoBar.module.scss';

const InfoBar = () => {
  return (
    <div className={styles['info-bar']}>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hvr-grow"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hvr-grow"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hvr-grow"><i className="fa-brands fa-tiktok"></i></a>
      </div>
      <div className={styles.info}>
        <strong>Free Shipping!</strong>
        <span>VE Orders <strong>$50+</strong></span>
        <span>Outside VE <strong>$100+</strong></span>
      </div>
      <div className={`${styles.socials} hidden`}>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </div>
  )
}

export default InfoBar;
