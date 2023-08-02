import React from "react";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import CategoryProducts from "@/components/layout/ui/CategoryProducts";

const CPUCategory = ({ products }) => {
  return (
    <>
      <Head>
        <title>Cpu Category</title>
      </Head>
      <CategoryProducts
        products={products}
        title="Processors"
      ></CategoryProducts>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=CPU/Processor`
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
CPUCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CPUCategory;
