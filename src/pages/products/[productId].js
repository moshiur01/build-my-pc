import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaStar, FaUser } from "react-icons/fa";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";
import StarRatings from "react-star-ratings";

const ProductDetails = ({ product }) => {
  const router = useRouter();

  if (router.isFallback || !product) {
    return <div>Loading...</div>;
  }

  //review calc
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;

    const totalRatings = reviews.reduce(
      (sum, review) => sum + review.IndividualRating,
      0
    );
    return totalRatings / reviews.length;
  };

  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>

      <div className="p-4 md:p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {product?.ProductName}
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-72 md:h-auto  rounded-xl">
            <Image
              src={product?.image}
              alt={product?.ProductName}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div>
            <p className="text-gray-500 mb-4 text-center md:text-left">
              <span className="font-semibold">Category: </span>
              {product?.Category}
            </p>
            <p className="mb-4">
              <span className="font-bold">Status: </span>
              {product?.Status ? (
                <span className="text-green-600 font-semibold">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
            <p className="mb-4">
              <span className="font-bold">Price:</span> ${product?.Price}
            </p>
            <p className="mb-4">
              <span className="font-bold">Description: </span>
              {product?.Description}
            </p>
            <div className="mb-4">
              <span className="font-bold">Key Features</span>
              <ul className="list-disc list-inside">
                {Object.keys(product.KeyFeatures).map((feature) => (
                  <li key={feature.model}>
                    <span className="font-semibold">{feature}: </span>
                    {product?.KeyFeatures[feature]}
                  </li>
                ))}
              </ul>

              <div className=" flex my-auto ">
                <p className="font-bold">Rating: </p>
                <div className="text-amber-400 ml-2 ">
                  <StarRatings
                    rating={calculateAverageRating(product?.Reviews)}
                    starRatedColor="orange"
                    numberOfStars={5}
                    starDimension="16px"
                    starSpacing="2px"
                  />
                </div>
              </div>
            </div>
            <div className="text-center md:text-left">
              {product.Status ? (
                <button className="btn btn-primary mb-4 text-white md:mb-0 hover:scale-105 transform transition duration-300">
                  Buy Now
                </button>
              ) : (
                <button
                  disabled
                  className="btn btn-primary mb-4 text-white md:mb-0 hover:scale-105 transform transition duration-300"
                >
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
          {product?.Reviews.map((review, index) => (
            <div key={index} className="flex items-center mb-4 ">
              <FaUser size={18} fill="black" className="mr-2" />
              <div>
                <p className="text-sm font-semibold">{review?.Name}</p>
                <div className="flex items-center">
                  <div className="text-amber-400 ml-2 ">
                    <StarRatings
                      rating={review.IndividualRating}
                      starRatedColor="orange"
                      numberOfStars={5}
                      starDimension="16px"
                      starSpacing="2px"
                    />
                  </div>
                </div>
                <p>{review?.Comment}</p>
              </div>
            </div>
          ))}
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
