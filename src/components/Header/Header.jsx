import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import openCart from '../../pages/Cart/openCart';

const setFocusStyle = (e) => e.target.parentElement.classList.add('search-form_focus');
const removeFocusStyle = (e) => e.target.parentElement.classList.remove('search-form_focus');

const Header = () => {
  return (
    <header>
      <div className={styles.logo}><Link to="/"><div>The Rage Lab</div></Link></div>
      <nav>
        <ul>
          <Link to="/cases"><li className={styles['hvr-underline']}>Cases</li></Link>
          <li className={styles['hvr-underline']}>Collections</li>
          <li className={styles['hvr-underline']}>Accesories</li>
          <Link to="/about-us"><li className={styles['hvr-underline']}>About Us</li></Link>
        </ul>
      </nav>
      <div className={styles.icons}>
        <form>
          <label htmlFor="search">Search</label>
          <input type="search" id="search" placeholder="Search..." onFocus={setFocusStyle} onBlur={removeFocusStyle}></input>
          <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-cart-shopping" onClick={openCart}></i>
      </div>
    </header>
  )
}

export default Header;
