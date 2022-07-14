import './Collection.scss';

const Collection = (props) => {
  const { text, img } = props;

  const style = {
    'background-image': `url(${img})`
  }

  return (
    <div className="home__collection" style={style}><div>{text}</div></div>
  )
}

export default Collection;
