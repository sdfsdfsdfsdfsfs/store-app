import styles from './InfoBar.module.scss';
import IconLink from '../IconLink/IconLink';

const InfoBar = () => {
  return (
    <div className={styles['info-bar']}>
      <div className={styles.socials}>
        <IconLink href="https://instagram.com" blank scheme="scheme-primary" icon="fa-brands fa-instagram" hover="grow"/>
        <IconLink href="https://facebook.com" blank scheme="scheme-primary" icon="fa-brands fa-facebook" hover="grow"/>
        <IconLink href="https://tiktok.com" blank scheme="scheme-primary" icon="fa-brands fa-tiktok" hover="grow"/>
      </div>
      <div className={styles.info}>
        <strong>Free Shipping!</strong>
        <span>VE Orders <strong>$50+</strong></span>
        <span>Outside VE <strong>$100+</strong></span>
      </div>
      <div className={`${styles.socials} hidden`}>
        <IconLink icon="fa-brands fa-instagram" />
        <IconLink icon="fa-brands fa-facebook" />
        <IconLink icon="fa-brands fa-tiktok" />
      </div>
    </div>
  )
}

export default InfoBar;
