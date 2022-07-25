import styles from './Banner.module.scss';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';

const Banner = (props) => {
  const { text, btnText, scheme, hover, banner, href } = props;

  const style = {
    backgroundImage: `url(${banner})`,
    color: scheme.split(', ')[1],
  };

  return(
    <div className={styles.banner} style={style}>
      <h1>{text}</h1>
      <ButtonLink text={btnText} scheme={scheme} hover={hover} href={href} />
    </div>
  )
}

export default Banner;
