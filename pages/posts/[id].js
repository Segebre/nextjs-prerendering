import { useRouter } from 'next/router';
import { sleep } from '../../src/utils/api';
import { formatDateString } from '../../src/utils/date';
import { SafeLink } from '../../src/components/safe-link';
import styles from '../../styles/Post.module.css';
import NoPrefetchLink from '../../src/components/no-prefetching-link';

// Snippet based on code example from Next.js
// https://nextjs.org/docs/basic-features/pages#scenario-2-your-page-paths-depend-on-external-datageneration
export async function getStaticPaths() {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_MOCK_API_KEY}.mockapi.io/posts?sortBy=id&order=desc`,
  );
  const posts = await res.json();
  const latestThreePosts = posts.slice(0, 2);

  // Get the paths we want to pre-render based on posts
  const paths = latestThreePosts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: true };
}

// Snippet based on code example from Next.js
// https://nextjs.org/docs/basic-features/pages#scenario-2-your-page-paths-depend-on-external-datageneration
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_MOCK_API_KEY}.mockapi.io/posts/${params.id}`,
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
      <p>
        All the data on this page is fetched from
        {' '}
        <SafeLink href="https://www.mockapi.io/">mockapi.io</SafeLink>
      </p>
      <div className={styles.header}>
        <h1 aria-describedby="info">{post.title}</h1>
        <div id="info">
          {post.author}
          {' '}
          -
          {formatDateString(post.createdAt)}
        </div>
      </div>

      <p>{post.content}</p>

      <NoPrefetchLink href="/posts">&larr; Return to posts</NoPrefetchLink>
    </div>
  );
}

export default Post;
