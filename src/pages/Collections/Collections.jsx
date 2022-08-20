import styles from './Collections.module.scss';
import collections from '../../data/collections';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CollectionCard from '../../components/CollectionCard/CollectionCard';

const Collections = () => {
  useDocTitle('Collections');
  
  return (
    <main className={styles.container}>
      <div className={styles.header}><SectionHeader text="Collections" /></div>
      <div className={styles.collections}>
        {Object.entries(collections).map(([key, value]) => {
          return <CollectionCard collection={value} id={key} key={key} />
        })}
      </div>
    </main>
  )
}

export default Collections;
