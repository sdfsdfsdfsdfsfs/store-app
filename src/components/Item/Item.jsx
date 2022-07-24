import styles from './Item.module.scss';
import collections from '../../data/collections';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const { id, img, name, price } = props.case;
  const collection = collections[id.split('-')[0]];

  return (
    <Link to={`/shop/cases/${id}`} className={styles.link}>
      <div className={styles.item}>
        <img src={img} alt={`${name} case`}/>
        <div className={styles.collection}>{collection}</div>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{`$${price} USD`}</div>
      </div>
    </Link>
  )
}

export default Item;
