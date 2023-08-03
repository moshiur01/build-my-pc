import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import CategoryProducts from "@/components/layout/ui/CategoryProducts";

const Ram = ({ products }) => {
  return (
    <>
      <Head>
        <title>Ram</title>
      </Head>
      <CategoryProducts
        products={products}
        title="Processors"
        btn={true}
      ></CategoryProducts>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/products?category=RAM`);
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

// Shared component (navbar and Footer)
Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Ram;
