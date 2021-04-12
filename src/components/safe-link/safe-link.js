const SafeLink = ({ children, ...props }) => (
  <a target="_blank" {...props} rel="noopener noreferrer">
    {children}
  </a>
);

export default SafeLink;
