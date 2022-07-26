import styles from './ButtonLink.module.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { scheme, hover, href, text, onClick } = props;
  const [color, background] = scheme.split(', ');

  const style = {
    color,
    background
  }

  return (
    <Link className={styles.link} to={href}>
      <div className={`${styles.btn} ${styles[`hvr-${hover}`]}`} style={style} onClick={onClick}>{text}</div>
    </Link>
  )
}

export default Button;
