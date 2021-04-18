import Head from 'next/head';
import SafeLink from '../src/components/safe-link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Pre-rendering</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pre-rendering using Next.js
        </h1>

        <p className={styles.description}>
          Check out the different types of renderings available when using Next.js
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h2>About &rarr;</h2>
            <p>Static Generation without data.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          Developed by
        </span>
        <span>
          Juan Enrique Segebre Zaghmout
        </span>
        <div>
          <SafeLink
            href="https://github.com/Segebre"
          >
            <img src="/github.png" alt="Juan's GitHub page" className={styles.logo} />
          </SafeLink>
          <SafeLink
            href="https://de.linkedin.com/in/segebre"
          >
            <img src="/linkedin.png" alt="Juan's LinkedIn page" className={styles.logo} />
          </SafeLink>
        </div>
      </footer>
    </div>
  );
}
