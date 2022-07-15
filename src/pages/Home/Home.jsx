import './Home.scss';
import scss from '../../assets/_shared.module.scss';
import Banner from './Banner';
import Collection from './Collection';
import Button from '../../components/Button';
import Item from '../../components/Item';
import cases from '../../data/cases';
import assets from './assets';

const Home = () => {
  return (
    <main className="home">
      <Banner text="Phone cases built for the bold" btnText="Shop Now" scheme={scss.schemeLight} hover="outline-light" banner={assets.banner}/>
      <div className="home__collections">
        <Collection text="Naruto" img={assets.naruto}/>
        <Collection text="Jujutsu Kaisen" img={assets.jujutsu}/>
        <Collection text="One Piece" img={assets.op}/>
        <Collection text="Demon Slayer" img={assets.demonSlayer}/>
        <Collection text="Dragon Ball" img={assets.dragonBall}/>
        <Collection text="Studio Ghibli" img={assets.ghibli}/>
      </div>
      <div className="home__about">
        <div>
          <h2>Made to protect</h2>
          <p>Protective. Inspiring. Unlimited style.</p>
          <Button text="Learn More" scheme={scss.schemePrimaryInv} hover="outline-light"/>
        </div>
        <div><img src={assets.sharingan} alt="phone case"/></div>
      </div>
      <div className="home__trending">
        <h2>Trending Now</h2>
        <div>
          <Item case={cases[0]}/>
          <Item case={cases[1]}/>
          <Item case={cases[2]}/>
          <Item case={cases[3]}/>
        </div>
      </div>
    </main>
  )
}

export default Home;
