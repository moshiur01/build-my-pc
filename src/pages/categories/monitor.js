import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import CategoryProducts from "@/components/layout/ui/CategoryProducts";

const Monitor = ({ products }) => {
  return (
    <>
      <Head>
        <title>Monitor</title>
      </Head>
      <CategoryProducts products={products} title="Monitors"></CategoryProducts>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=Monitor`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
    revalidate: 30,
  };
};

// Shared component (navbar and Footer)
Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Monitor;
