import '../styles/Home.scss';
import Button from './Button';
import variables from '../styles/variables.module.scss';

const Home = () => {
  return (
    <main className="home">
      <div className="banner">
        <div className="banner__content">
          <h1>Phone cases built for the bold</h1>
          <Button scheme={variables.schemeLight} text="Shop Now" hover="outline-light"/>
        </div>
      </div>
      <div className="collections">
        <div className="collection"><div>Trending cases</div></div>
        <div className="collection"><div>Trending cases</div></div>
        <div className="collection"><div>Trending cases</div></div>
      </div>
    </main>
  )
}

export default Home;
