import '../styles/Header.css'

const setFocusStyle = (e) => e.target.parentElement.classList.add('search-form_focus');
const removeFocusStyle = (e) => e.target.parentElement.classList.remove('search-form_focus');

const Header = () => {
  return (
    <header>
      <div className="logo">The Rage Lab</div>
      <nav>
        <ul>
          <li className="nav-item">Cases</li>
          <li className="nav-item">Collections</li>
          <li className="nav-item">Accesories</li>
          <li className="nav-item">About Us</li>
        </ul>
      </nav>
      <div className="header__icons">
        <div className="search-form">
          <input type="search" id="search" placeholder="Search..." onFocus={setFocusStyle} onBlur={removeFocusStyle}></input>
          <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  )
}

export default Header;
