const style = {
  background: 'rgba(0, 0, 0)',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  opacity: 0,
  transition: 'opacity 0.5s',
}

const Overlay = (props) => {
  return <div id="overlay" style={style} onClick={props.onClick}></div>
}

export default Overlay;
