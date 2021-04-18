// Static Generation

import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={styles.content}>
      <h1>About</h1>
      <p>This is a statically generated page.</p>
      <a href="/">&larr; Return to examples</a>
    </div>
  );
}

export default About;
