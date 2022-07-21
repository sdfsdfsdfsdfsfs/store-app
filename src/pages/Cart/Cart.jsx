import styles from './Cart.module.scss';
import scss from '../../assets/_shared.module.scss';
import Overlay from './Overlay';
import IconButton from '../../components/IconButton';
import CartItem from './CartItem';
import Button from '../../components/Button';
import giornoPattern from '../../assets/images/cases/giorno-pattern.png';

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

const item = {
  collection: "Jojo's Bizarre Adventures",
  name: 'Giorno Pattern',
  price: 20,
  img: giornoPattern,
  device: 'iPhone 13',
  quantity: 2,
}

const Cart = () => {
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
          <CartItem item={item} />
        </div>
        <div className={styles.summary}>
          <div><span>Subtotal</span><span>$150 USD</span></div>
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
