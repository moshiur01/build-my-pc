import React from "react";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import CategoryProducts from "@/components/layout/ui/CategoryProducts";

const MotherBoard = ({ products }) => {
  return (
    <>
      <Head>
        <title>Motherboards</title>
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
    `http://localhost:3000/api/products?category=Motherboard`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

// Shared component (navbar and Footer)
MotherBoard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default MotherBoard;
