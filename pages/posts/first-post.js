import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

/**
 * Own
 */
// components
import Layout from "../../components/layout"

const FirstPost = () => {
    return(
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log("Script loaded correctly, window.FB has been populated!");
                }}
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}

export default FirstPost;
