import styles from './IconLink.module.scss';

const IconLink = (props) => {
  const { scheme, icon, hover, href, blank } = props;
  const [color, background] = scheme.split(', ');

  const style = {
    color,
    background
  }

  const targetBlank = {
    target: '_blank',
    rel: 'noreferrer',
  }

  return (
    <a className={styles[`hvr-${hover}`]} style={style} href={href} {...(blank ? targetBlank : {})}>
      <i className={icon}></i>
    </a>
  )
}

export default IconLink;
