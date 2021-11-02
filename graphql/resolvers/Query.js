module.exports.Query = {
  hello: () => "Hello, GraphQL",
  products: (_, { filter }, { products, reviews }) => {
    let filterProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale) {
        filterProducts = filterProducts.filter(product => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filterProducts = filterProducts.filter(product => {
          let sumRating = 0;
          let numberOfReviews = 0;

          reviews.forEach(review => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;

          return avgProductRating >= avgRating;
        });
      }
    }

    return filterProducts;
  },
  product: (parent, { id }, { products }, info) => {
    return products.find(product => String(product.id) === String(id));
  },
  categories: (_, __, { categories }) => categories,
  category: (_, args, { categories }) => {
    return categories.find(category => args.id === category.id);
  },
};
