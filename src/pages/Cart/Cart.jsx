import styles from './Cart.module.scss';
import scss from '../../assets/_shared.module.scss';
import { useEffect, useState } from 'react';
import Overlay from './Overlay';
import IconButton from '../../components/IconButton';
import CartItem from './CartItem';
import Button from '../../components/Button';
import giornoPattern from '../../assets/images/cases/giorno-pattern.png';
import whiteClouds from '../../assets/images/cases/white-clouds.png';

const openCart = () => {
  document.querySelector('body').classList.add('hide-scroll');
  document.querySelector('#overlay').style.position = 'fixed';
  document.querySelector('#overlay').style.opacity = 0.8;
  document.querySelector('#cart').style.width = '480px';
}

const closeCart = () => {
  document.querySelector('#cart').style.width = 0;
  document.querySelector('#overlay').style.opacity = 0;
  // Wait for opacity transition to finish before removing fixed position
  setTimeout(() => {
    document.querySelector('#overlay').style.position = 'static';
    document.querySelector('body').classList.remove('hide-scroll');
  }, 500);
}

const b = [
  {
    collection: "Jojo's Bizarre Adventures",
    name: 'GiorXDDDDDDDDn',
    price: 100,
    img: giornoPattern,
    device: 'iPhone 13',
    quantity: 2,
  },
  {
    collection: "Naruto",
    name: 'White Clouds',
    price: 15,
    img: whiteClouds,
    device: 'Redmi Note 9',
    quantity: 1,
  },
  {
    collection: "Naruto",
    name: 'White Clouds',
    price: 15,
    img: whiteClouds,
    device: 'Redmi Note 9',
    quantity: 1,
  },
];

const Cart = () => {
  const [items, setItems] = useState(b);

  const calcSubtotal = () => {
    return items.reduce((prev, cur) => prev + cur.price, 0);
  }
  const [subtotal, setSubtotal] = useState(calcSubtotal);

  const removeItem = (e) => {
    setItems(items.filter((item, i) => {
      return i !== +e.target.parentElement.attributes['data-index'].value;
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
    </div>
  )
}

export default Cart;
export { openCart };
