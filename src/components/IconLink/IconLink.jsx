import styles from './IconLink.module.scss';

const IconLink = (props) => {
  const { scheme, icon, hover, href, blank } = props;

  const targetBlank = {
    target: '_blank',
    rel: 'noreferrer',
  }

  return (
    <a className={`${scheme} ${styles[`hvr-${hover}`]}`} href={href} {...(blank ? targetBlank : {})}>
      <i className={icon}></i>
    </a>
  )
}

export default IconLink;
