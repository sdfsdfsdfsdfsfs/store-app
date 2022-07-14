import './Home.scss';
import scss from '../../assets/_shared.module.scss';
import Banner from './Banner';
import Collection from './Collection';
import bannerImg from '../../assets/images/banner2.webp';
import narutoImg from '../../assets/images/collections/naruto.jpg';
import jujutsuImg from '../../assets/images/collections/jujutsu.jpg';
import opImg from '../../assets/images/collections/one-piece.jpg';
import demonSlayerImg from '../../assets/images/collections/demon-slayer.jpg';
import dragonBallImg from '../../assets/images/collections/dragon-ball.jpg';
import ghibliImg from '../../assets/images/collections/ghibli.jpg';

const Home = () => {
  return (
    <main className="home">
      <Banner text="Phone cases built for the bold" btnText="Shop Now" scheme={scss.schemeLight} hover="outline-light" banner={bannerImg}/>
      <div className="home__collections">
        <Collection text="Naruto" img={narutoImg}/>
        <Collection text="Jujutsu Kaisen" img={jujutsuImg}/>
        <Collection text="One Piece" img={opImg}/>
        <Collection text="Demon Slayer" img={demonSlayerImg}/>
        <Collection text="Dragon Ball" img={dragonBallImg}/>
        <Collection text="Studio Ghibli" img={ghibliImg}/>
      </div>
    </main>
  )
}

export default Home;
