import styles from './ItemDetail.module.scss';
import collections from '../../data/collections';
import cases from '../../data/cases';
import { useParams } from 'react-router-dom';
import Form from "./Form";

const ItemDetail = () => {
  const { id } = useParams();
  const item = cases.find((i) => i.id === id);
  const collection = collections[id.split('-')[0]];
  const { img, name, price } = item;

  return (
    <main className={styles.item}>
      <div className={styles.img}><img src={img} alt={`${name} case`} /></div>
      <div className={styles.info}>
        <div>
          <div className={styles.collection}>{collection}</div>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.price}>{`$${price} USD`}</div>
        </div>
        <Form />
      </div>
    </main>
  )
}

export default ItemDetail;
