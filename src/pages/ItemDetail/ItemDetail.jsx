import styles from './ItemDetail.module.scss';
import Form from "./Form";
import whiteClouds from '../../assets/images/cases/white-clouds.png';

const ItemDetail = () => {
  return (
    <main className={styles.item}>
      <div className={styles.img}><img src={whiteClouds} alt="case" /></div>
      <div className={styles.info}>
        <div>
          <div className={styles.collection}>Naruto</div>
          <h2 className={styles.name}>White Clouds</h2>
          <div className={styles.price}>$60 USD</div>
        </div>
        <Form />
      </div>
    </main>
  )
}

export default ItemDetail;
