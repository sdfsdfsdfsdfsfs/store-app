const Item = (props) => {
  const { img, collection, model, price } = props;

  return (
    <div className="item">
      <img src={img} alt={`${model} case`}/>
      <div>{collection}</div>
      <div>{model}</div>
      <div>{price}</div>
    </div>
  )
}

export default Item