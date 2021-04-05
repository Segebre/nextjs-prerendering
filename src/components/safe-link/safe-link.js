const SafeLink = props => {
    return (<a
        target="_blank"
        {...props}
        rel="noopener noreferrer"
    />);
};

export default SafeLink;
