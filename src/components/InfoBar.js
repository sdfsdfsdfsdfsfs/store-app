import '../styles/InfoBar.css';

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="info-bar__socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-tiktok"></i></a>
      </div>
      <div className="info-bar__shipping">
        <strong>Free Shipping!</strong>
        <span>VE Orders <strong>$50+</strong></span>
        <span>Outside VE <strong>$100+</strong></span>
      </div>
      <div className="info-bar__socials hidden">
        <i className="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-tiktok"></i>
      </div>
    </div>
  )
}

export default InfoBar;