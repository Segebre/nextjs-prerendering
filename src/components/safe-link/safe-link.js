import ExternalLinkIcon from './external-link.svg';
import styles from './SafeLink.module.css';

const SafeLink = ({ children, noA11yIcon, ...props }) => (
  <a target="_blank" {...props} rel="noopener noreferrer">
    {children}
    {!noA11yIcon && <ExternalLinkIcon aria-label="opens in new tab" className={styles.inlineIcon} />}
  </a>
);

export default SafeLink;
