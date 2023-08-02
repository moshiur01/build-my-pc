import React from "react";
import Link from "next/link";
import Image from "next/image";
import { utils } from "@/utlis/calculateReviews";
const FeaturedProducts = ({ products }) => {
  const reviews = utils.calculateAverageRating(products);
  return (
    <>
      <div className="mx-auto text-center pb-8 pt-14">
        <h1 className="text-4xl font-bold py-2 ">Featured Products</h1>
        <p>Choose Our Best Products for your Dream Rig</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-items-center pb-8">
        {products.map((product) => (
          <Link href={`/products/${product?._id}`} key={product._id}>
            <div className="card w-64 sm:w-72 bg-base-100 shadow-xl border border-gray-300 rounded-lg hover:shadow-2xl transform transition-transform hover:scale-105">
              <figure className="px-6 pt-6">
                <Image
                  src={product?.image}
                  alt="Shoes"
                  className="rounded-xl h-36 w-36 sm:h-40 sm:w-40"
                  width={160}
                  height={160}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg">{product?.ProductName}</h2>
                <div className="text-xl font-bold">${product?.Price}</div>
                <div className="flex items-center justify-center mt-2 space-x-9 text-sm">
                  {product?.Status ? (
                    <div className="text-sm text-green-600 font-bold ">
                      In Stock
                    </div>
                  ) : (
                    <div className="text-sm text-red-600 font-bold">
                      Out of Stock
                    </div>
                  )}

                  <div className="text-yellow-500">Rating: {reviews}</div>
                </div>
                <div className="mt-2 text-bas text-gray-600 ">
                  <span className="font-bold">Category: </span>
                  {product?.Category}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
