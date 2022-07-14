import './Home.scss';
import scss from '../../assets/_shared.module.scss';
import Button from '../../components/Button';

const Home = () => {
  return (
    <main className="home">
      <div className="home__banner">
          <h1>Phone cases built for the bold</h1>
          <Button text="Shop Now" scheme={scss.schemeLight} hover="outline-light" />
      </div>
      <div className="home__collections">
        <div className="collection-1"><div>Naruto</div></div>
        <div className="collection-4"><div>Jujutsu Kaisen</div></div>
        <div className="collection-3"><div>One Piece</div></div>
        <div className="collection-2"><div>Demon Slayer</div></div>
        <div className="collection-6"><div>Dragon Ball</div></div>
        <div className="collection-5"><div>Studio Ghibli</div></div>

      </div>
    </main>
  )
}

export default Home;
