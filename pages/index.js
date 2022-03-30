import Head from "next/head";
import Link from "next/link";

/**
 * Own
 */
import Layout, { siteTitle } from '../components/layout';
import ThemeChanger from "../components/theme-changer";
import utilStyles from "../styles/utils.module.css";
import getSortedPostsData from "../lib/posts";
import Date from '../components/date'

export default function Home({ allPostsData }) {

  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:title" content="@1antares1 Simple Blog implemented using Next.js + React and themes included" key="title" />
        <meta property="og:url" content="https://react-nextjs-blog-git-main-1antares1.vercel.app/" />
        <meta property="og:image" content="https://react-nextjs-blog-git-main-1antares1.vercel.app/_next/image?url=%2Fimg%2F1antares1-ntf.jpg&w=256&q=75" />
      </Head>
      <aside>
        <ThemeChanger></ThemeChanger>
      </aside>
      <section>
        <p>
          Hi, dear! I'm <strong>José Ramírez (1antares1)</strong>
          <br />
          I'm a Web3/Rust developer and a writer about crypto/blockchain.
          <br />

          <p>
            This website was build with <strong>Next.js.</strong>
          </p>

          You can contact me on {" "}
          <Link href="https://twitter.com/1antares1">
            <a>Twitter.</a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}
