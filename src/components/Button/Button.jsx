import styles from './Button.module.scss';

const Button = (props) => {
  const { scheme, hover, onClick, text } = props;

  return (
    <button className={`${styles.btn} ${scheme} ${styles[`hvr-${hover}`]}`} onClick={onClick}>{text}</button>
  )
}

export default Button;
