import styles from './Collections.module.scss';
import collections from '../../data/collections';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CollectionCard from '../../components/CollectionCard/CollectionCard';

const Collections = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}><SectionHeader text="Collections" /></div>
      {collections.map((collection) => {
        return (
          <CollectionCard id={collection.id}/>
        )
      })}

    </main>
  )
}

export default Collections;
