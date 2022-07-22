import styles from './Cart.module.scss';
import scss from '../../assets/_shared.module.scss';
import cartSample from '../../data/cartSample';
import { useState } from 'react';
import { closeCart } from './openCart';
import Overlay from './Overlay';
import IconButton from '../../components/IconButton';
import CartContent from './CartContent';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const [items, setItems] = useState(cartSample);

  const removeItem = (e) => {
    setItems(items.filter((item, i) => {
      return i !== +e.target.attributes['data-index'].value;
    }));
  }

  const summary = { subtotal: items.reduce((prev, cur) => prev + cur.price * cur.quantity, 0) };
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
        {items.length > 0 ? <CartContent items={items} summary={summary} removeItem={removeItem} /> : <EmptyCart />}
      </div>
    </div>
  )
}

export default Cart;
