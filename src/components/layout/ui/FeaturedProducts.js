import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedProducts = ({ products }) => {
  return (
    <>
      <div className="mx-auto text-center pb-8 pt-14">
        <h1 className="text-4xl font-bold py-2 ">Featured Products</h1>
        <p>Choose Our Best Products for your Dream Rig</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-items-center pb-8">
        {products.map((product) => (
          <Link href={`${product?._id}`} key={product._id}>
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
                <p className="text-sm">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="flex items-center justify-center mt-3 space-x-2 text-sm">
                  <div className="text-sm text-green-600">
                    {product?.Status ? "In Stock" : "Out of Stock"}
                  </div>
                  <div className="text-xl font-bold">${product?.Price}</div>
                  <div className="text-yellow-500">
                    Rating: {product?.Rating}/5
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Category: {product?.Category}
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
