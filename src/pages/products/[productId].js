import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";

const ProductDetails = ({ product }) => {
  const router = useRouter();

  // If the data hasn't loaded yet or productId doesn't exist, display a loading state
  if (router.isFallback || !product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>

      <div className="p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          {product?.ProductName}
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative w-full h-72 md:h-auto">
            <Image
              src={product?.image}
              alt={product?.ProductName}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <p className="text-gray-500 mb-4 text-center md:text-left">
              {product?.Category}
            </p>
            <p className="mb-4">
              <span className="font-bold">Status:</span>{" "}
              {product?.Status === "In Stock" ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
            <p className="mb-4">
              <span className="font-bold">Price:</span> ${product?.Price}
            </p>
            <p className="mb-4">
              <span className="font-bold">Description:</span>{" "}
              {product?.Description}
            </p>
            <div className="mb-4">
              <span className="font-bold">Key Features:</span>{" "}
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-semibold">Brand:</span>{" "}
                  {product?.KeyFeatures?.Brand}
                </li>
                <li>
                  <span className="font-semibold">Model:</span>{" "}
                  {product?.KeyFeatures?.Model}
                </li>
                <li>
                  <span className="font-semibold">Specification:</span>{" "}
                  {product?.KeyFeatures?.Specification}
                </li>
                <li>
                  <span className="font-semibold">Socket:</span>{" "}
                  {product?.KeyFeatures?.Socket}
                </li>
                <li>
                  <span className="font-semibold">Clock Speed:</span>{" "}
                  {product?.KeyFeatures?.ClockSpeed}
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <span className="font-bold">Reviews:</span>{" "}
              {product?.Reviews.map((review, index) => (
                <div key={index} className="flex items-center mb-2">
                  <FaStar
                    size={18}
                    fill="#FCD34D"
                    className="text-yellow-500 mr-1"
                  />
                  <div className="ml-1">
                    <p className="text-sm font-semibold">{review?.Name}</p>
                    <p>{review?.Comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center md:text-left">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

//get staticProps
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?productId=${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};

//shared component (navbar and Footer)
ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
