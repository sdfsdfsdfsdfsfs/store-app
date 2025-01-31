import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import openCart from '../../pages/Cart/openCart';
import IconButton from '../IconButton/IconButton';

const setFocusStyle = (e) => e.target.parentElement.classList.add(styles.focus);
const removeFocusStyle = (e) => e.target.parentElement.classList.remove(styles.focus);

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><Link to="/"><img src={logo} alt="logo" /></Link><Link to="/">The Rage Lab</Link></div>
      <nav>
        <ul className={styles.nav}>
          <Link to="/shop/cases"><li className={styles['hvr-underline']}>Cases</li></Link>
          <Link to="/shop/collections"><li className={styles['hvr-underline']}>Collections</li></Link>
          <Link to="/shop/accesories"><li className={styles['hvr-underline']}>Accesories</li></Link>
          <Link to="/about-us"><li className={styles['hvr-underline']}>About Us</li></Link>
        </ul>
      </nav>
      <div className={styles.user}>
        <form>
          <label htmlFor="search">Search</label>
          <input type="search" id="search" placeholder="Search..." onFocus={setFocusStyle} onBlur={removeFocusStyle} />
          <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-magnifying-glass" hover="glow" />
        </form>
        <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-user" hover="glow" />
        <IconButton scheme="scheme-primary_inv" icon="fa-solid fa-cart-shopping" hover="glow" onClick={openCart} />
      </div>
    </header>
  )
}

export default Header;
