// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

import { getAllPostIds, getPostData } from '../../lib/posts';

import utilsStyles from '../../styles/utils.module.css';

// 3. getStaticProps which fetches necessary data for the post with `id`
// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props

export async function getStaticProps({ params }) {
  // Add "await"
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

// 2. getStaticPaths which returns an array of possible values for `id`
export async function getStaticPaths() {
  const paths = getAllPostIds();

  // paths contains the array of known paths returned by getAllPostIds(), which include the params defined by pages/posts/[id].js
  return {
    paths,
    fallback: false,
    // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
    // If fallback is true, then the behavior of getStaticProps changes:
    // The paths returned from getStaticPaths will be rendered to HTML at build time.
    // The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a “fallback” version of the page on the first request to such a path.
    // In the background, Next.js will statically generate the requested path. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
  };
}

// 1. React Component to render this page
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilsStyles.headingXl}>{postData.id}</h1>
        <div className={utilsStyles.lightTextDate}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

// Catch-all Routes
// Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:

// pages/posts/[...id].js matches /posts/a, but also /posts/a/b, /posts/a/b/c and so on.

// If you do this, in getStaticPaths, you must return an array as the value of the id key like so:
// return [
//   {
//     params: {
//       // Statically Generates /posts/a/b/c
//       id: ["a", "b", "c"],
//     },
//   },
//   //...
// ];

// And params.id will be an array in getStaticProps
// export async function getStaticProps({ params }) {
//   // params.id will be like ['a', 'b', 'c']
// }
