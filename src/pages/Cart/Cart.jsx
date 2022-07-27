import styles from './Cart.module.scss';
import scss from '../../assets/_shared.module.scss';
import { closeCart } from './openCart';
import Overlay from './Overlay/Overlay';
import IconButton from '../../components/IconButton/IconButton';
import CartContent from './CartContent/CartContent';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = (props) => {
  const { cart, setCart } = props;

  const removeItem = (e) => {
    setCart(cart.filter((item, i) => {
      return i !== +e.currentTarget.attributes['data-index'].value;
    }));
  }

  const changeQuantity = (quantity, index) => {
    setCart(cart.map((item, i) => {
      if (i === index) {
        item.quantity = quantity;
      }
      return item;
    }));
  }

  const summary = { subtotal: cart.reduce((prev, cur) => prev + cur.price * cur.quantity, 0) };
  summary.shipping = (summary.subtotal < 50) ? 10 : 0; 
  summary.total = summary.subtotal + summary.shipping;

  return (
    <div>
      <Overlay onClick={closeCart}/>
      <div id="cart" className={styles.cart}>
        <div className={styles.header}>
          <IconButton scheme={scss.schemePrimaryInv} icon="fa-solid fa-angle-right" hover="rotate-45" onClick={closeCart} />
          <h2>My Cart</h2>
          <IconButton scheme={scss.schemeLight} icon="fa-solid fa-angle-right" />
        </div>
        {(cart.length > 0) 
          ? <CartContent cart={cart} summary={summary} removeItem={removeItem} changeQuantity={changeQuantity} /> 
          : <EmptyCart />}
      </div>
    </div>
  )
}

export default Cart;
