import './styles/Button.scss';

const Button = (props) => {
  const { scheme, hover, onClick, text } = props;
  const [color, background] = scheme.split(', ');

  const style = {
    color,
    background
  }

  return (
    <button className={`btn hvr-${hover}`} onClick={onClick} style={style}>{text}</button>
  )
}

export default Button;
