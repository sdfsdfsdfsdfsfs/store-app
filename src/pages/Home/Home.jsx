import './Home.scss';
import scss from '../../assets/_shared.module.scss';
import assets from './assets';
import cases from '../../data/cases';
import { useEffect } from 'react';
import Banner from './Banner';
import Collection from './Collection';
import Button from '../../components/Button';
import Item from '../../components/Item';

const Home = () => {
  useEffect(() => {
    document.title = 'The Rage Lab';
  }, []);

  return (
    <main className="home">
      <Banner text="Phone cases built for the bold" btnText="Shop Now" scheme={scss.schemeLight} hover="outline-light" banner={assets.banner} />
      <div className="home__collections">
        <div>
          <div className="hidden"><span>View more</span><i className="fa-solid fa-angles-right"></i></div>
          <h2>Popular Collections</h2>
          <div><span>View more</span><i className="fa-solid fa-angles-right"></i></div>
        </div>
        <div>
          <Collection text="Naruto" img={assets.collection1} />
          <Collection text="Demon Slayer" img={assets.collection2} />
          <Collection text="Attack on Titan" img={assets.collection3} />
        </div>
      </div>
      <div className="home__about">
        <div>
          <h2>Made to protect</h2>
          <p>Protective. Inspiring. Unlimited style.</p>
          <Button text="Learn More" scheme={scss.schemePrimaryInv} hover="outline-light" />
        </div>
        <div><img src={assets.phoneCase} alt="phone case"/></div>
      </div>
      <div className="home__trending">
        <h2>Trending Now</h2>
        <div>
          <Item case={cases[0]} />
          <Item case={cases[1]} />
          <Item case={cases[2]} />
          <Item case={cases[3]} />
        </div>
      </div>
    </main>
  )
}

export default Home;
