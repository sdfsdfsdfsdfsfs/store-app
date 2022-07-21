import styles from './Cart.module.scss';
import scss from '../../assets/_shared.module.scss';
import whiteClouds from '../../assets/images/cases/white-clouds.png';
import Overlay from './Overlay';
import QuantityInput from '../ItemDetail/QuantityInput';
import Button from '../../components/Button';

const openCart = () => {
  document.querySelector('#overlay').style.position = 'fixed';
  document.querySelector('#overlay').style.opacity = 0.8;
  document.querySelector('#cart').style.width = '480px';
}

const closeCart = () => {
  document.querySelector('#cart').style.width = 0;
  document.querySelector('#overlay').style.opacity = 0;
  // Wait for opacity transition to finish before removing fixed position
  setTimeout(() => document.querySelector('#overlay').style.position = 'static', 500);
}

const Cart = () => {
  return (
    <div>
      <Overlay onClick={closeCart}/>
      <div id="cart" className={styles.cart}>
        <div className={styles.header}>
          <h2>My cart</h2>
          <i className="fa-solid fa-xmark" onClick={closeCart}></i>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={whiteClouds} alt="case" />
            <div>
              <div className={styles.item__info}>
                <div className={styles.item__name}>
                  <span>White Clouds</span>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div>iPhone 13</div>
                <div>Naruto</div>
              </div>
              <div className={styles.item__price}>
                <QuantityInput />
                <span>$50 USD</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          <div><span>Subtotal</span><span>$150 USD</span></div>
          <div><span>Shipping</span><span>$40 USD</span></div>
          <div><span>Total</span><span>$190 USD</span></div>
        </div>
        <div className={styles.btn}><Button text="Continue to checkout" scheme={scss.schemePrimary} hover="glow" /></div>
      </div>
    </div>
  )
}

export default Cart;
export { openCart };
