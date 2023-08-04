import React from "react";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import CategoryProducts from "@/components/layout/ui/CategoryProducts";

const PowerSupply = ({ products }) => {
  return (
    <>
      <Head>
        <title>Power Supply</title>
      </Head>
      <CategoryProducts
        products={products}
        title="Power Supply Units"
      ></CategoryProducts>
    </>
  );
};

export const getStaticProps = async () => {
  // //for build purpose
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //     revalidate: 30,
  //   };
  // }
  const res = await fetch(
    `https://build-my-pc-bice.vercel.app/api/products?category=Power Supply Unit`
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
PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default PowerSupply;
