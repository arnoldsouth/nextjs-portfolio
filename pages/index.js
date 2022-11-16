import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilsStyles from "../styles/utils.module.css";
import react from "react";
import Projects from "../components/projects";

// Fetch external data (file system) and pre-rendered index page with the data from /posts/
// Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.

// In development (npm run dev or yarn dev), getStaticProps runs on every request.
// In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    // props will be passed to the page component as props
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilsStyles.headingMd}>
        <p>
          i’m aj, a software engineer with a background in public accounting and
          finance currently living in the bay.
        </p>
      </section>

      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Skillset</h2>

        <small>
          <ul
            className={`${utilsStyles.list} ${utilsStyles.listItem} ${utilsStyles.lightText}`}
          >
            <li>javascript</li>
            <li>react & nextjs</li>
            <li>express</li>
            <li>nodejs</li>
            <li>nextjs</li>
            <li>mongodb</li>
          </ul>
        </small>
      </section>

      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Projects</h2>

        <Projects />

        <ul className={`${utilsStyles.list} ${utilsStyles.listItem}`}>
          <li>chowstagram</li>
          <li>helpmeCOOK</li>
          <li>statistiqs</li>
        </ul>
      </section>

      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingLg}>Blog</h2>
        <ul className={utilsStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li
              className={utilsStyles.listItem}
              key={id}
            >
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilsStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// Fetch External API or Query Database
// we’ve implemented getSortedPostsData which fetches data from the file system. But you can fetch the data from other sources, like an external API endpoint, and it’ll work just fine

// export async function getSortedPostsData() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const res = await fetch('..');
//   return res.json();
// }

//

// Query the database directly:

// import someDatabaseSDK from 'someDatabaseSDK'

// const databaseClient = someDatabaseSDK.createClient(...)

// export async function getSortedPostsData() {
//   // Instead of the file system,
//   // fetch post data from a database
//   return databaseClient.query('SELECT posts...')
// }

//

// Server-side rendering

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

//

// React hook for data fetching called SWR. We highly recommend it if you’re fetching data on the client side.
// https://swr.vercel.app/
// It handles caching, revalidation, focus tracking, refetching on interval, and more
// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }
