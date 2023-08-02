function calculateAverageRating(products) {
  let totalRatings = 0;
  let totalReviews = 0;

  for (const product of products) {
    const reviews = product.Reviews || [];
    for (const review of reviews) {
      totalRatings += review.IndividualRating || 0;
      totalReviews += 1;
    }
  }

  if (totalReviews === 0) {
    return 0;
  }

  const averageRating = totalRatings / totalReviews;
  return averageRating.toFixed(2);
}

// const categoryReviews = (products, reviews) => {
//   const calculateAverageRating = (reviews) => {
//     if (!reviews || reviews.length === 0) return 0;

//     const totalRatings = reviews.reduce(
//       (sum, review) => sum + review.IndividualRating,
//       0
//     );
//     return totalRatings / reviews.length;
//   };

//   // Calculate the average rating for each product and add it to the product object
//   const productsWithAvgRating = products.map((product) => ({
//     ...product,
//     AverageRating: calculateAverageRating(product.Reviews),
//   }));

//   // Calculate the overall average rating for all products
//   const totalRatings = productsWithAvgRating.reduce(
//     (sum, product) => sum + product.AverageRating,
//     0
//   );
//   const overallAverageRating = totalRatings / productsWithAvgRating.length;

//   console.log("Products with Average Ratings:", productsWithAvgRating);
//   console.log("Overall Average Rating:", overallAverageRating);
// };

export const utils = {
  calculateAverageRating,
};
