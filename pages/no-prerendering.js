// No pre-rendering

import dynamic from 'next/dynamic';

const NoPreRendering = dynamic(
  () => import('./about'),
  { ssr: false },
);

export default NoPreRendering;
