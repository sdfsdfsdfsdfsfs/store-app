import styles from './SectionHeader.module.scss';
import { Link } from 'react-router-dom';

const SectionHeader = (props) => {
  const { text, link } = props;

  const style = { justifyContent: (link) ? 'space-between' : 'center'}

  const viewMoreHidden = (link) ? <Link to={link} className={`${styles.view} hidden`}><span>View more</span><i className="fa-solid fa-angles-right"></i></Link> : null;
  const viewMore = (link) ? <Link to={link} className={styles.view}><span>View more</span><i className="fa-solid fa-angles-right"></i></Link> : null;

  return (
    <div className={styles.header} style={style}>
      {viewMoreHidden}
      <h2>{text}</h2>
      {viewMore}
    </div>
  )
}

export default SectionHeader;
