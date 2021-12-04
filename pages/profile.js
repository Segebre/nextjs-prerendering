// Server Side Rendering

import { formatDateString } from '../src/utils/date';
import { SafeLink } from '../src/components/safe-link';
import NoPrefetchLink from '../src/components/no-prefetching-link';
import styles from '../styles/Profile.module.css';

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const [user] = data.results;

  // Pass data to the page via props
  return { props: { user } };
}

function Profile({ user }) {
  return (
    <div className={styles.content}>
      <h1 aria-describedby="disclaimer">Profile</h1>
      <p id="disclaimer">
        All the data on this page is fetched from
        {' '}
        <SafeLink href="https://randomuser.me/">randomuser.me</SafeLink>
      </p>
      <dl>
        <div>
          <dt>Name</dt>
          <dd>
            {user.name.first}
            {' '}
            {user.name.last}
          </dd>
        </div>

        <div>
          <dt>Username</dt>
          <dd>{user.login.username}</dd>
        </div>

        <div>
          <dt>Email address</dt>
          <dd>{user.email}</dd>
        </div>

        <div>
          <dt>Member since</dt>
          <dd>
            {formatDateString(user.registered.date)}
            {' '}
            (
            {user.registered.age}
            {' '}
            years ago)
          </dd>
        </div>
      </dl>

      <NoPrefetchLink href="/">&larr; Return to examples</NoPrefetchLink>
    </div>
  );
}

export default Profile;
