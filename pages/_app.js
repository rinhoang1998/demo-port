import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
  
        <link 
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" 
          rel="stylesheet"
        />

      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
