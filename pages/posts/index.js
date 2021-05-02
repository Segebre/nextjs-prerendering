// Static Generation with data

import styles from '../../styles/Posts.module.css';

// Snippet based on code example from Next.js
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps() {
  const res = await fetch(
    'https://607b6ab567e6530017573130.mockapi.io/posts?sortBy=id&order=desc',
  );
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
    revalidate: 10, // time in seconds to re-run getStaticProps (re-generate the page)
  };
}

function Posts({ posts }) {
  return (
    <div className={styles.content}>
      <h1>Posts</h1>
      <ul className={styles.list}>
        {posts.map(({ id, title }) => (
          <li key={id} className={styles.listItem}>
            <a href={`/posts/${id}`} className={styles.post}>
              {title}
            </a>
          </li>
        ))}
      </ul>
      <a href="/" className={styles.back}>
        &larr; Return to examples
      </a>
    </div>
  );
}

export default Posts;
