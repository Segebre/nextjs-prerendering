import NoPrefetchLink from '../src/components/no-prefetching-link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Pre-rendering using Next.js</h1>

      <p className={styles.description}>
        Check out the different types of renderings available when using Next.js
      </p>

      <div className={styles.grid}>
        <NoPrefetchLink href="/about" className={styles.card}>
          <h2>About &rarr;</h2>
          <p>Static Generation without data.</p>
        </NoPrefetchLink>

        <NoPrefetchLink href="/no-prerendering" className={styles.card}>
          <h2>About &rarr;</h2>
          <p>Without pre-rendering.</p>
        </NoPrefetchLink>

        <NoPrefetchLink href="/posts" className={styles.card}>
          <h2>Posts &rarr;</h2>
          <p>Static Generation with data.</p>
        </NoPrefetchLink>

        <NoPrefetchLink href="/profile" className={styles.card}>
          <h2>Profile &rarr;</h2>
          <p>Server-side Rendering.</p>
        </NoPrefetchLink>
      </div>
    </>
  );
}
