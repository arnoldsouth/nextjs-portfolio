import Head from "next/head";
import Image from "next/image";
import layoutStyles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "aj southammavong";
export const siteTitle = "ajSOUTHAMMAVONG";

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <link
          rel="icon"
          href="/favicon.png"
        />

        <meta
          name="og:title"
          content={siteTitle}
        />
      </Head>

      <header className={layoutStyles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilsStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilsStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>

            <h2 className={utilsStyles.headingLg}>
              <Link
                href="/"
                className={utilsStyles.colorInherit}
              >
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={layoutStyles.backToHome}>
          <Link href="/">← Back</Link>
        </div>
      )}
    </div>
  );
}
