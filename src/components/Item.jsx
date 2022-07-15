import './styles/Item.scss';

const Item = (props) => {
  const { img, collection, name, price } = props.case;

  return (
    <div className="item">
      <img src={img} alt={`${name} case`}/>
      <div className="item__collection">{collection}</div>
      <div className="item__name">{name}</div>
      <div className="item__price">{`$${price} USD`}</div>
    </div>
  )
}

export default Item;
