import { addProducts } from "@/redux/features/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import StarRatings from "react-star-ratings";

const CategoryProducts = ({ products, title, btn }) => {
  const router = useRouter();

  //redux dispatcher
  const dispatch = useDispatch();
  //calc reviews
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;

    const totalRatings = reviews.reduce(
      (sum, review) => sum + review.IndividualRating,
      0
    );
    return totalRatings / reviews.length;
  };

  //add products to redux state

  const handleAddProductsToPcBuild = (product) => {
    dispatch(addProducts(product));
    router.push("/pcbuilder");
  };

  return (
    <div className="p-8">
      <div className="text-center my-8">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {product.Status ? (
              <div className="badge badge-info gap-2 text-lg p-3 font-medium">
                In Stock
              </div>
            ) : (
              <div className="badge badge-error text-lg p-3 gap-2">
                Out of Stock
              </div>
            )}

            <div className="grid justify-center">
              <Link href={`/products/${product._id}`}>
                <div className="relative h-48 mx-auto">
                  <Image
                    src={product.image}
                    alt={product.ProductName}
                    className="rounded-xl h-[200px] w-[250px]"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.ProductName}
                  </h2>
                  <p className=" mb-2">
                    <span className="font-bold">Category : </span>
                    {product.Category}
                  </p>
                  <p className="text-gray-600 font-bold mb-2">
                    ${product.Price}
                  </p>
                  <div className="text-amber-400 my-2">
                    <StarRatings
                      rating={calculateAverageRating(product?.Reviews)}
                      starRatedColor="orange"
                      numberOfStars={5}
                      starDimension="16px"
                      starSpacing="2px"
                    />
                  </div>
                </div>
              </Link>
              <div className="p-4 text-center">
                {btn && (
                  <div>
                    {product.Status ? (
                      <button
                        className="bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        onClick={() => handleAddProductsToPcBuild(product)}
                      >
                        Add to Builder
                      </button>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-400 text-white text-sm font-semibold py-2 px-3 rounded-lg "
                      >
                        Add to Builder
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
