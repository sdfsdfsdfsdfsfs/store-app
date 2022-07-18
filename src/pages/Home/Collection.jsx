import './Collection.scss';

const Collection = (props) => {
  const { text, img } = props;

  const style = {
    'background-image': `url(${img})`
  }

  return (
    <div className="home__collection" style={style}>
      <div>
        <span>{text}</span>
        <div><span>Explore</span><i className="fa-solid fa-angles-right"></i></div>
      </div>
    </div>
  )
}

export default Collection;
