import '../styles/Shop.css';
import { useState } from 'react';
import ITEMS from '../assets/cases/ITEMS';
import Item from './Item';

const multiItems = [...ITEMS, ...ITEMS, ...ITEMS];

const Shop = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(multiItems);

  return (
    <div className="items">
      {items.map(item => {
        const { img, collection, model, price } = item;
        return <Item img={img} collection={collection} model={model} price={price} />
      })}
    </div>
  );
}

export default Shop;