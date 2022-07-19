import './styles/Item.scss';
import collections from '../data/collections';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const { id, img, name, price } = props.case;
  const collection = collections[id.split('-')[0]];

  return (
    <Link to={`/shop/cases/${id}`} className="item-link">
      <div className="item">
        <img src={img} alt={`${name} case`}/>
        <div className="item__collection">{collection}</div>
        <div className="item__name">{name}</div>
        <div className="item__price">{`$${price} USD`}</div>
      </div>
    </Link>
  )
}

export default Item;
