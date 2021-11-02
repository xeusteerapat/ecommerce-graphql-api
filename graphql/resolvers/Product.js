module.exports.Product = {
  category: ({ categoryId }, _, { categories }) => {
    return categories.find(category => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter(review => review.productId === id);
  },
};
