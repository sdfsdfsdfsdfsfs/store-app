import styles from './ItemDetail.module.scss';
import collections from '../../data/collections';
import cases from '../../data/cases';
import useDocTitle from '../../hooks/useDocTitle';
import { useParams } from 'react-router-dom';
import Form from './Form/Form';

const ItemDetail = () => {
  const { id } = useParams();
  const collection = collections[id.split('-')[0]];
  const item = cases.find((i) => i.id === id);
  const { img, name, price } = item;

  useDocTitle(`${name} Case`);

  return (
    <main className={styles.item}>
      <div className={styles.img}><img src={img} alt={`${name} case`} /></div>
      <div className={styles.info}>
        <div>
          <div className={styles.collection}>{collection}</div>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.price}>{`$${price} USD`}</div>
        </div>
        <Form />
      </div>
    </main>
  )
}

export default ItemDetail;
