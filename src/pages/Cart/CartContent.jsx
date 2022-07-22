import styles from './CartContent.module.scss';
import scss from '../../assets/_shared.module.scss';
import CartItem from './CartItem';
import Button from '../../components/Button';

const CartContent = (props) => {
  const { items, removeItem } = props;
  const { subtotal, shipping, total } = props.summary;

  return (
    <div className={styles.content}>
      <div className={styles.items}>
        {items.map((item, i) => {
          return <CartItem item={item} key={item.name} dataIndex={i} removeItem={removeItem} />
        })}
      </div>
      <div className={styles.summary}>
        <div><span>Subtotal</span><span>{`$${subtotal} USD`}</span></div>
        <div><span>Shipping</span><span>{(shipping === 0) ? 'FREE' : `$${shipping} USD`}</span></div>
        <div><span>Total</span><span>{`$${total} USD`}</span></div>
      </div>
      <div className={styles.btn}><Button text="Continue to Checkout" scheme={scss.schemePrimary} hover="glow" /></div>
    </div>
  )
}

export default CartContent;
