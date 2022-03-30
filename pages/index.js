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
