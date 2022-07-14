import './Banner.scss';
import Button from '../../components/Button';

const Banner = (props) => {
  const { text, btnText, scheme, hover, banner } = props;

  const style = { 'background-image': `url(${banner})` };

  return(
    <div className="home__banner" style={style}>
      <h1>{text}</h1>
      <Button text={btnText} scheme={scheme} hover={hover} />
    </div>
  )
}

export default Banner;
