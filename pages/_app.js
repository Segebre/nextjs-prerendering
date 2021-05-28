import Head from 'next/head';
import { basePath } from '../src/utils/constants';
import SafeLink from '../src/components/safe-link';
import styles from '../styles/App.module.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pre-rendering using Next.js</title>
        <link rel="icon" href={`${basePath}/favicon.png`} />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <span>Developed by</span>
          <span>Juan Enrique Segebre Zaghmout</span>
          <div>
            <SafeLink href="https://github.com/Segebre" noA11yIcon>
              <img
                src={`${basePath}/github.png`}
                alt="Juan's GitHub page"
                className={styles.logo}
              />
            </SafeLink>
            <SafeLink href="https://de.linkedin.com/in/segebre" noA11yIcon>
              <img
                src={`${basePath}/linkedin.png`}
                alt="Juan's LinkedIn page"
                className={styles.logo}
              />
            </SafeLink>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
