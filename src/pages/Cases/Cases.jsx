import styles from './Cases.module.scss';
import cases from '../../data/cases';
import useDocTitle from '../../hooks/useDocTitle';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Item from '../../components/Item/Item';

const Cases = () => {
  useDocTitle('Cases');

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <SectionHeader text="All Cases" />
      </div>
      <div className={styles.cases}>
        {cases.map((item) => {
          return <Item case={item} key={item.id} />
        })}
      </div>
    </main>
  );
}

export default Cases;
