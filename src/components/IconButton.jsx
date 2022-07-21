import styles from './styles/IconButton.module.scss';

const IconButton = (props) => {
  const { scheme, icon, hover, onClick } = props;
  const [color, background] = scheme.split(', ');

  const style = {
    color,
    background
  }

  return (
    <button className={`${styles.btn} ${styles[`hvr-${hover}`]}`} style={style} onClick={onClick}>
      <i className={icon}></i>
    </button>
  )
}

export default IconButton;
