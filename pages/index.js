import dynamic from "next/dynamic";
import Head from "next/head";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio của Nhật Linh </title>
      </Head>
      <Home />
      {/* HERO */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* /CONTACT */}
      <Contact />
    </Layout>
  );
};
export default Index;
