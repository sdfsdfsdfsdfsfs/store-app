import '../styles/AboutUs.scss';
import whiteClouds from '../assets/cases/white-clouds.png';
import giornoPattern from '../assets/cases/giorno-pattern.png';
import nezukoPattern from '../assets/cases/nezuko-pattern.png';

const scrollToInfo = () => {
  document.querySelector('.about__info').scrollIntoView({behavior: 'smooth'});
}

const AboutUs = () => {
  return (
    <main className="about">
      <div className="about__header">
        <h1>About The Rage Lab</h1>
        <div>
          <strong>Love your rage, not your cage.</strong>
          <p>We are a Venezuela-based tech accessories company built for the bold. As big believers in self-expression, we wanted to embody just that for the playmakers who settle for nothing less than the best for their phone cases.</p>
        </div>
        <button className="hvr-outline-out" onClick={scrollToInfo}>Meet The Rage Lab</button>
      </div>
      <div className="about__info">
        <h2>Designed in Maracaibo</h2>
        <p>The Rage Lab is an online tech accesories retailer. We design, create and sell our cases internationally and exclusively at The Rage Lab.</p>
      </div>
      <div className="about__imgs">
        <img src={whiteClouds} alt="phone case"/>
        <img src={giornoPattern} alt="phone case"/>
        <img src={nezukoPattern} alt="phone case"/>
      </div>
      <div className="about__description">
        <p>Founded in 2022, <strong>The Rage Lab</strong> set off on a mission to provide the dreamers of the world with super cool, affordable phone cases and accessories. Fast forward to now and we're accomplishing our mission... and more.</p>
        <p>We proudly hand-print and finish all of our products in Venezuela, which is why we're able to offer free personalisation on almost every product.</p>
        <p><strong>The Rage Lab</strong> is proudly a family run business, with a very hard-working team. We specialise in on-trend phone cases and accessories. Having sold over 500,000 cases worldwide, satisfying hundreds of customers on a daily basis, we're one of the fastest growing phone case & accessory retailers in the country.</p>
        <p>We always put our customers first, with a rapidly expanding customer happiness team, there's always somebody on hand to answer your query.</p>
      </div>
      {/* Replace img with logo once I get it */}
      <img src={whiteClouds} alt="logo"></img>
      <button>Shop Now</button>
    </main>
  )
}

export default AboutUs;
