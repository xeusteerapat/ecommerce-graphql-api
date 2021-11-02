module.exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    const productsByCatId = products.filter(product => {
      return product.categoryId === id;
    });

    let filteredCategoryProducts = productsByCatId;

    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(product => {
          return product.onSale;
        });
      }
    }

    return filteredCategoryProducts;
  },
};
