import styles from './InfoBar.module.scss';
import scss from '../../assets/_shared.module.scss';
import IconLink from '../IconLink/IconLink';

const InfoBar = () => {
  return (
    <div className={styles['info-bar']}>
      <div className={styles.socials}>
        <IconLink href="https://instagram.com" blank scheme={scss.schemePrimary} icon="fa-brands fa-instagram" hover="grow"/>
        <IconLink href="https://facebook.com" blank scheme={scss.schemePrimary} icon="fa-brands fa-facebook" hover="grow"/>
        <IconLink href="https://tiktok.com" blank scheme={scss.schemePrimary} icon="fa-brands fa-tiktok" hover="grow"/>
      </div>
      <div className={styles.info}>
        <strong>Free Shipping!</strong>
        <span>VE Orders <strong>$50+</strong></span>
        <span>Outside VE <strong>$100+</strong></span>
      </div>
      <div className={`${styles.socials} hidden`}>
        <IconLink icon="fa-brands fa-instagram" scheme={scss.schemePrimary}/>
        <IconLink icon="fa-brands fa-facebook" scheme={scss.schemePrimary}/>
        <IconLink icon="fa-brands fa-tiktok" scheme={scss.schemePrimary}/>
      </div>
    </div>
  )
}

export default InfoBar;
