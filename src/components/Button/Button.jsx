import styles from './Button.module.scss';

const Button = (props) => {
  const { scheme, hover, onClick, text } = props;
  const [color, background] = scheme.split(', ');

  const style = {
    color,
    background
  }

  return (
    <button className={`${styles.btn} ${styles[`hvr-${hover}`]}`} onClick={onClick} style={style}>{text}</button>
  )
}

export default Button;
