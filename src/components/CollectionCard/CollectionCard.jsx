import styles from './CollectionCard.module.scss';
import { Link } from 'react-router-dom';

const CollectionCard = (props) => {
  const { text, img, id } = props;

  const style = {
    backgroundImage: `url(${img})`,
  }

  return (
    <Link to={`/collections/${id}`} className={styles.card} style={style}>
      <div className={styles.collection}>
        <div className={styles.name}>{text}</div>
        <div className={styles.explore}><span>Explore</span><i className="fa-solid fa-angles-right"></i></div>
      </div>
    </Link>
  )
}

export default CollectionCard;
