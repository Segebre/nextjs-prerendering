// `addBasePath` from 'next/dist/next-server/lib/router/router' was returning
// different results in the server and client. Replicating the code here fixed the issue.
// Although I am unsure why, I think it might be
// `process.env.__NEXT_ROUTER_BASEPATH` returning an empty sting in the server
import { normalizePathTrailingSlash } from 'next/dist/client/normalize-trailing-slash';

// code extracted from Next.js' source code and refactored
// source: https://github.com/vercel/next.js/blob/3a78ccd43fb9ed8bf16bebc624cf2133cd69987a/packages/next/next-server/lib/router/router.ts#L145-L153
function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');
  let calculatedPath = path;

  if (queryIndex > -1 || hashIndex > -1) {
    calculatedPath = path.substring(
      0,
      queryIndex > -1 ? queryIndex : hashIndex
    );
  }

  return calculatedPath;
}

// code extracted from Next.js' source code and refactored
// source: https://github.com/vercel/next.js/blob/3a78ccd43fb9ed8bf16bebc624cf2133cd69987a/packages/next/next-server/lib/router/router.ts#L79-L85
function addPathPrefix(path, prefix) {
  let calculatedPath = path;

  if (prefix && path.startsWith('/')) {
    if (path === '/') {
      calculatedPath = normalizePathTrailingSlash(prefix);
    } else {
      calculatedPath = `${prefix}${
        pathNoQueryHash(path) === '/' ? path.substring(1) : path
      }`;
    }
  }

  return calculatedPath;
}

// This component was created instead of Link because
// Link does provide a way to avoid pre-fetching onMouseEnter
// we want to avoid pre-fetching due to the objective of this app
// Unwanted code: https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx#L284-L290
const NoPrefetchLink = ({ href, children, ...props }) => {
  const prefix = process.env.__NEXT_ROUTER_BASEPATH;
  const absoluteHref = addPathPrefix(href, prefix);

  return (
    <a href={absoluteHref} {...props}>
      {children}
    </a>
  );
};

export default NoPrefetchLink;
