import '../styles/Header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">The Rage Lab</div>
      <nav>
        <ul>
          <li>Cases</li>
          <li>Collections</li>
          <li>Accesories</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="user">
        <form>
          <label htmlFor="search">Search bar</label>
          <input type="text" id="search"></input>
          <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  )
}

export default Header;
