import React from "react";

import Head from "next/head";
import { client } from "../Lib/client";
import { Product, FooterBanner, HeroBanner, ContactForm } from "../componets";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <Head>
        <title>Christina Maria Designs</title>
        <meta
          name="description"
          content="Fine Art, Jewelry, and Vintage Accessories"
        />
        <link rel="icon" href="//Girl-in-Pink1.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="//Girl-in-Pink1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Girl-in-Pink1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Girl-in-Pink1.png"
        />

        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Christina Maria Designs" />
        <meta property="og:image" content="Girl-in-Pink1.png" />
        <meta
          property="og:url"
          content="https://christina-maria-designs-oj1v6p0tj-kyle-j-hilton.vercel.app/"
        />
      </Head>

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
      <ContactForm />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
