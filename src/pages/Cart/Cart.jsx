import styles from './Cart.module.scss';
import scss from '../../assets/_shared.module.scss';
import cartSample from '../../data/cartSample';
import { useEffect, useState } from 'react';
import { closeCart } from './openCart';
import Overlay from './Overlay';
import IconButton from '../../components/IconButton';
import CartContent from './CartContent';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const [items, setItems] = useState(cartSample);

  const calcSubtotal = () => {
    return items.reduce((prev, cur) => prev + cur.price, 0);
  }

  const [subtotal, setSubtotal] = useState(calcSubtotal);

  const removeItem = (e) => {
    setItems(items.filter((item, i) => {
      return i !== +e.target.attributes['data-index'].value;
    }));
  }

  useEffect(() => {
    setSubtotal(calcSubtotal);
  }, [items]);

  return (
    <div>
      <Overlay onClick={closeCart}/>
      <div id="cart" className={styles.cart}>
        <div className={styles.header}>
          <IconButton scheme={scss.schemePrimaryInv} icon="fa-solid fa-angle-right" hover="rotate-45" onClick={closeCart} />
          <h2>My Cart</h2>
          <IconButton scheme={scss.schemeLight} icon="fa-solid fa-angle-right" />
        </div>
        {items.length > 0 ? <CartContent items={items} subtotal={subtotal} removeItem={removeItem} /> : <EmptyCart />}
      </div>
    </div>
  )
}

export default Cart;
