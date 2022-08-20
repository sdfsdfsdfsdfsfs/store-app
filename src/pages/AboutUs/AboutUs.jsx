import styles from './AboutUs.module.scss';
import assets from './assets';
import useDocTitle from '../../hooks/useDocTitle';
import Button from '../../components/Button/Button';
import ButtonLink from '../../components/ButtonLink/ButtonLink';

const scrollToInfo = () => {
  document.querySelector(`.${styles.info}`).scrollIntoView({ behavior: 'smooth' });
}

const AboutUs = () => {
  useDocTitle('About Us');

  return (
    <main className={styles.about}>
      <div className={styles.banner}>
        <h1>About The Rage Lab</h1>
        <div>
          <strong>Love your rage, not your cage.</strong>
          <p>We are a Venezuela-based tech accessories company built for the bold. As big believers in self-expression, we wanted to embody just that for the playmakers who settle for nothing less than the best for their phone cases.</p>
        </div>
        <Button text="Meet The Rage Lab" scheme="scheme-primary_inv" hover="outline-light" onClick={scrollToInfo} />
      </div>
      <div className={styles.info}>
        <h2>Designed in Maracaibo</h2>
        <p>The Rage Lab is an online tech accesories retailer. We design, create and sell our cases internationally and exclusively at The Rage Lab.</p>
      </div>
      <div className={styles.imgs}>
        <img src={assets.case1} alt="Phone case"/>
        <img src={assets.case2} alt="Phone case"/>
        <img src={assets.case3} alt="Phone case"/>
      </div>
      <div className={styles.description}>
        <p>Founded in 2022, <strong>The Rage Lab</strong> set off on a mission to provide the dreamers of the world with super cool, affordable phone cases and accessories. Fast forward to now and we're accomplishing our mission... and more.</p>
        <p>We proudly hand-print and finish all of our products in Venezuela, which is why we're able to offer free personalisation on almost every product.</p>
        <p><strong>The Rage Lab</strong> is proudly a family run business, with a very hard-working team. We specialise in on-trend phone cases and accessories. Having sold over 500,000 cases worldwide, satisfying hundreds of customers on a daily basis, we're one of the fastest growing phone case & accessory retailers in the country.</p>
        <p>We always put our customers first, with a rapidly expanding customer happiness team, there's always somebody on hand to answer your query.</p>
      </div>
      <div className={styles.shop}>
        <img src={assets.logo} alt="logo"></img>
        <ButtonLink text="Shop Now" href="/shop/cases" scheme="scheme-primary" hover="glow" />
      </div>
    </main>
  )
}

export default AboutUs;
