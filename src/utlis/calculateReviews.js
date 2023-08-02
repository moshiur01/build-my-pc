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

export const utils = {
  calculateAverageRating,
};
