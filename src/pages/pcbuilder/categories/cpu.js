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
        btn={true}
      ></CategoryProducts>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://build-my-pc-bice.vercel.app/api/products?category=CPU/Processor`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

// Shared component (navbar and Footer)
CPUCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CPUCategory;
