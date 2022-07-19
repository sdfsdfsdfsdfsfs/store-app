import styles from './QuantityInput.module.scss';
import { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => (quantity < 20) ? setQuantity(quantity + 1) : null;
  const handleDecrement = () => (quantity > 1) ? setQuantity(quantity - 1) : null;

  const handleChange = (e) => {
    const value = (isNaN(e.target.value) || e.target.value < 1) ? 1 : +e.target.value;
    (value > 20) ? setQuantity(20) : setQuantity(value);
  }

  const setFocusStyle = (e) => e.target.parentElement.classList.add(styles.focus);
  const removeFocusStyle = (e) => e.target.parentElement.classList.remove(styles.focus);

  return (
    <div className={styles.input}>
      <label htmlFor="quantity">Quantity</label>
      <div>
        <button type="button" onClick={handleDecrement}><i className="fa-solid fa-minus"></i></button>
        <input type="text" id="quantity" value={quantity} onChange={handleChange} onFocus={setFocusStyle} onBlur={removeFocusStyle} />
        <button type="button" onClick={handleIncrement}><i className="fa-solid fa-plus"></i></button>
      </div>
    </div>
  )
}

export default QuantityInput;
