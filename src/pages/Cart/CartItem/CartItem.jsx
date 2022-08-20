import styles from './CartItem.module.scss';
import collections from '../../../data/collections';
import cases from '../../../data/cases';
import IconButton from '../../../components/IconButton/IconButton';
import QuantityInput from '../../../components/QuantityInput/QuantityInput';

const CartItem = (props) => {
  const { dataIndex, removeItem, changeQuantity } = props;

  const { id, price, device, quantity, } = props.item;
  const collection = collections[id.split('-')[0]].name;
  const item = cases[id];
  const { img, name } = item;

  return (
    <div className={styles.item}>
      <img src={img} alt={name} />
      <div>
        <div className={styles.info}>
          <div className={styles.name}>
            <span>{name}</span>
            <IconButton icon="fa-solid fa-xmark" scheme="scheme-light" hover="rotate-90" onClick={removeItem} dataIndex={dataIndex} />
          </div>
          <div>{device}</div>
          <div>{collection}</div>
        </div>
        <div className={styles.price}>
          <QuantityInput value={quantity} onChange={changeQuantity} dataIndex={dataIndex} />
          <span>{`$${price} USD`}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
