import styles from './Cases.module.scss';
import cases from '../../data/cases';
import Item from '../../components/Item/Item';

const Cases = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>All Cases</h1>
      </div>
      <div className={styles.cases}>
        {cases.map((item) => {
          return <Item case={item} />
        })}
      </div>
    </main>
  );
}

export default Cases;