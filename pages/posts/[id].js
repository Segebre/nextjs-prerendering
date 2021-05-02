import { useRouter } from 'next/router';
import { sleep } from '../../src/utils/api';
import { formatDateString } from '../../src/utils/date';
import styles from '../../styles/Post.module.css';

// Snippet based on code example from Next.js
// https://nextjs.org/docs/basic-features/pages#scenario-2-your-page-paths-depend-on-external-datageneration
export async function getStaticPaths() {
  const res = await fetch(
    'https://607b6ab567e6530017573130.mockapi.io/posts?sortBy=id&order=desc'
  );
  const posts = await res.json();
  const latestThreePosts = posts.slice(0, 2);

  // Get the paths we want to pre-render based on posts
  const paths = latestThreePosts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: 'blocking' };
}

// Snippet based on code example from Next.js
// https://nextjs.org/docs/basic-features/pages#scenario-2-your-page-paths-depend-on-external-datageneration
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `http://607b6ab567e6530017573130.mockapi.io/posts/${params.id}`
  );
  const post = await res.json();

  // Simulating slow network for easier pre-rendering visualization
  await sleep(3000);

  // Pass post data to the page via props
  return { props: { post } };
}

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1 aria-describedby="info">{post.title}</h1>
        <div id="info">
          {post.author} - {formatDateString(post.createdAt)}
        </div>
      </div>

      <p>{post.content}</p>

      <a href="/posts" className={styles.back}>
        &larr; Return to posts
      </a>
    </div>
  );
}

export default Post;
