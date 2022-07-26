import styles from './Form.module.scss';
import scss from '../../../assets/_shared.module.scss';
import devices from '../../../data/devices';
import { useState } from 'react';
import QuantityInput from '../../../components/QuantityInput/QuantityInput';
import Button from '../../../components/Button/Button';

const Form = () => {
  const [models, setModels] = useState(devices.apple);

  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="brand">Brand</label>
        <select id="brand" defaultValue="apple" onChange={(e) => setModels(devices[e.target.value])}>
          <option value="apple" >Apple</option>
          <option value="samsung">Samsung</option>
          <option value="xiaomi">Xiaomi</option>
        </select>
      </div>
      <div className={styles.input}>
        <label htmlFor="model">Model</label>
        <select id="model">
          {models.map((model, i) => {
            return <option value={model.toLowerCase()} key={i}>{model}</option>
          })}
        </select>
      </div>
      <QuantityInput />
      <Button text="Add to Cart" scheme={scss.schemePrimary} hover="glow" />
    </form>
  )
}

export default Form;
