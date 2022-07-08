import '../styles/Item.css';

const Item = (props) => {
  const { img, collection, model, price } = props;

  return (
    <div className="item">
      <img src={img} alt={`${model} case`}/>
      <div className="item__collection">{collection}</div>
      <div>{model}</div>
      <div className="item__price">{`$${price} USD`}</div>
    </div>
  )
}

export default Item