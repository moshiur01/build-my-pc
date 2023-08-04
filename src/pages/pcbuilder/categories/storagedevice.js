import React from "react";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import CategoryProducts from "@/components/layout/ui/CategoryProducts";

const StorageDevice = ({ products }) => {
  return (
    <>
      <Head>
        <title>Storage Devices</title>
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
    `https://build-my-pc-bice.vercel.app/api/products?category=Storage Device`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

// Shared component (navbar and Footer)
StorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default StorageDevice;
