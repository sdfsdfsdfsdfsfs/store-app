import styles from './EmptyCart.module.scss';
import scss from '../../../assets/_shared.module.scss';
import { closeCart } from '../openCart';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.message}>Your cart is empty :(</div>
      <div className={styles.btn}><ButtonLink text="Shop Now" href="/shop/cases" onClick={closeCart} scheme={scss.schemePrimary} hover="glow" /></div>
    </div>
  )
}

export default EmptyCart;
