import styles from './Home.module.scss';
import assets from './assets';
import cases from '../../data/cases';
import useDocTitle from '../../hooks/useDocTitle';
import Banner from './Banner/Banner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CollectionCard from '../../components/CollectionCard/CollectionCard';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import Item from '../../components/Item/Item';
import collections from '../../data/collections';

const Home = () => {
  useDocTitle();

  return (
    <main className={styles.home}>
      <Banner text="Phone cases built for the bold" btnText="Shop Now" scheme="scheme-light" hover="outline-light" href="/shop/cases" banner={assets.banner} />
      <div className={styles.collections}>
        <SectionHeader text="Popular Collections" href="/shop/collections" />
        <div className={styles.cards}>
          <CollectionCard collection={collections.nar} />
          <CollectionCard collection={collections.dsl} />
          <CollectionCard collection={collections.aot} />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.info}>
          <h2>Made to Protect</h2>
          <p>Protective. Inspiring. Unlimited style.</p>
          <ButtonLink href="/about-us" text="Learn More" scheme="scheme-primary" hover="outline-light" />
        </div>
        <div><img src={assets.phoneCase} alt="phone case"/></div>
      </div>
      <div className={styles.trending}>
        <SectionHeader text="Trending Now" />
        <div className={styles.cases}>
          <Item case={cases['aot-02']} id="aot-02" />
          <Item case={cases['sxf-01']} id="sxf-01" />
          <Item case={cases['sgh-01']} id="sgh-01" />
          <Item case={cases['jjk-02']} id="jjk-02" />
        </div>
      </div>
    </main>
  )
}

export default Home;
