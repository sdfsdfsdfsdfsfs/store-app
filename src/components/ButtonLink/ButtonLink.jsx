import styles from './ButtonLink.module.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { scheme, hover, href, text } = props;
  const [color, background] = scheme.split(', ');

  const style = {
    color,
    background
  }

  return (
    <Link to={href} className={`${styles.btn} ${styles[`hvr-${hover}`]}`} style={style}>{text}</Link>
  )
}

export default Button;
