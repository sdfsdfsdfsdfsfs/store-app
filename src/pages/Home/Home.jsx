import styles from './Home.module.scss';
import scss from '../../assets/_shared.module.scss';
import assets from './assets';
import cases from '../../data/cases';
import useDocTitle from '../../hooks/useDocTitle';
import Banner from './Banner/Banner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import Item from '../../components/Item/Item';

const Home = () => {
  useDocTitle();

  return (
    <main className={styles.home}>
      <Banner text="Phone cases built for the bold" btnText="Shop Now" scheme={scss.schemeLight} hover="outline-light" banner={assets.banner} href="/shop/cases" />
      <div className={styles.collections}>
        <SectionHeader text="Popular Collections" href="/collections" />
        <div className={styles.cards}>
          <CollectionCard text="Naruto" img={assets.collection1} id="naruto" />
          <CollectionCard text="Demon Slayer" img={assets.collection2} id="demon-slayer" />
          <CollectionCard text="Attack on Titan" img={assets.collection3} id="attack-on-titan" />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.info}>
          <h2>Made to Protect</h2>
          <p>Protective. Inspiring. Unlimited style.</p>
          <ButtonLink href="/about-us" text="Learn More" scheme={scss.schemePrimaryInv} hover="outline-light" />
        </div>
        <div><img src={assets.phoneCase} alt="phone case"/></div>
      </div>
      <div className={styles.trending}>
        <SectionHeader text="Trending Now" />
        <div className={styles.cases}>
          <Item case={cases[16]} />
          <Item case={cases[0]} />
          <Item case={cases[2]} />
          <Item case={cases[6]} />
        </div>
      </div>
    </main>
  )
}

export default Home;
