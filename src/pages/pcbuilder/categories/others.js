import React from "react";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import CategoryProducts from "@/components/layout/ui/CategoryProducts";

const Others = ({ products }) => {
  return (
    <>
      <Head>
        <title>Other Products</title>
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
  const res = await fetch(`http://localhost:3000/api/products?category=Others`);
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

// Shared component (navbar and Footer)
Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Others;
