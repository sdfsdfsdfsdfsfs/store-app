import styles from './EmptyCart.module.scss';
import scss from '../../assets/_shared.module.scss';
import Button from '../../components/Button';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <div className={styles.message}>Your cart is empty :(</div>
      <div className={styles.btn}><Button text="Shop Now" scheme={scss.schemePrimary} hover="glow" /></div>
    </div>
  )
}

export default EmptyCart;
