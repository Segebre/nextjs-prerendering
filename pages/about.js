// Static Generation

import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.content}>
      <h1>About</h1>
      <p>
        Check the HTML preview of the response to the first request to see if this is a statically
        generated page. You can see this in the Network tab.
      </p>
      <a href="/">&larr; Return to examples</a>
    </div>
  );
}

export default About;
