import './styles/InfoBar.scss';

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="info-bar__socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hvr-grow"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hvr-grow"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hvr-grow"><i class="fa-brands fa-tiktok"></i></a>
      </div>
      <div className="info-bar__info">
        <strong>Free Shipping!</strong>
        <span>VE Orders <strong>$50+</strong></span>
        <span>Outside VE <strong>$100+</strong></span>
      </div>
      <div className="info-bar__socials hidden">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </div>
  )
}

export default InfoBar;
