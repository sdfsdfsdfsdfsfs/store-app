import styles from './Banner.module.scss';
import Button from '../../../components/Button/Button';

const Banner = (props) => {
  const { text, btnText, scheme, hover, banner } = props;

  const style = {
    backgroundImage: `url(${banner})`,
    color: scheme.split(', ')[1],
  };

  return(
    <div className={styles.banner} style={style}>
      <h1>{text}</h1>
      <Button text={btnText} scheme={scheme} hover={hover} />
    </div>
  )
}

export default Banner;
