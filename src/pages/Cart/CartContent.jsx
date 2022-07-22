import styles from './CartContent.module.scss';
import scss from '../../assets/_shared.module.scss';
import CartItem from './CartItem';
import Button from '../../components/Button';

const CartContent = (props) => {
  const { items, subtotal, removeItem} = props;

  return (
    <div className={styles.content}>
      <div className={styles.items}>
        {items.map((item, i) => {
          return <CartItem item={item} key={i} dataIndex={i} onClick={removeItem} />
        })}
      </div>
      <div className={styles.summary}>
        <div><span>Subtotal</span><span>{`$${subtotal} USD`}</span></div>
        <div><span>Shipping</span><span>$40 USD</span></div>
        <div><span>Total</span><span>$190 USD</span></div>
      </div>
      <div className={styles.btn}><Button text="Continue to Checkout" scheme={scss.schemePrimary} hover="glow" /></div>
    </div>
  )
}

export default CartContent;
