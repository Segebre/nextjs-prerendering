// Static Generation with data

import { useEffect } from 'react';
import styles from '../../styles/Posts.module.css';
import { SafeLink } from '../../src/components/safe-link';
import NoPrefetchLink from '../../src/components/no-prefetching-link';

// Snippet based on code example from Next.js
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps() {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_MOCK_API_KEY}.mockapi.io/posts?sortBy=id&order=desc`,
  );
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
    // revalidate: 10, // time in seconds to re-run getStaticProps (re-generate the page)
  };
}

function Posts({ posts }) {
  useEffect(() => {
    fetch(
      `https://${process.env.NEXT_PUBLIC_MOCK_API_KEY}.mockapi.io/posts?sortBy=id&order=desc`,
    );
  });

  return (
    <div className={styles.content}>
      <h1 aria-describedby="disclaimer">Posts</h1>
      <p id="disclaimer">
        All the data on this page is fetched from
        {' '}
        <SafeLink href="https://www.mockapi.io/">mockapi.io</SafeLink>
      </p>
      <ul className={styles.list}>
        {posts.map(({ id, title }) => (
          <li key={id} className={styles.listItem}>
            <NoPrefetchLink href={`/posts/${id}`} className={styles.post}>
              {title}
            </NoPrefetchLink>
          </li>
        ))}
      </ul>
      <NoPrefetchLink href="/">&larr; Return to examples</NoPrefetchLink>
    </div>
  );
}

export default Posts;
