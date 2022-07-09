import '../styles/Header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">TheRageLab</div>
      <nav>
        <ul>
          <li>Cases</li>
          <li>Collections</li>
          <li>Accesories</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div class="user">
        <form>
          <label htmlFor="search">Search bar</label>
          <input type="text" id="search"></input>
          <button type="button">i</button>
        </form>
        <i>user</i>
        <i>cart</i>
      </div>
    </header>
  )
}

export default Header;