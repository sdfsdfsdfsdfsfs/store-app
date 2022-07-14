import './styles/Button.scss';

const Button = (props) => {
  const { scheme, hover, clickEvent, text } = props;
  const [color, background] = scheme.split(', ');

  const style = {
    color,
    background
  }

  return (
    <button className={`btn hvr-${hover}`} onClick={clickEvent} style={style}>{text}</button>
  )
}

export default Button;
