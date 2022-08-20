import styles from './ButtonLink.module.scss';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { scheme, hover, href, text, onClick } = props;

  return (
    <Link className={styles.link} to={href}>
      <div className={`${styles.btn} ${scheme} ${styles[`hvr-${hover}`]}`} onClick={onClick}>{text}</div>
    </Link>
  )
}

export default Button;
