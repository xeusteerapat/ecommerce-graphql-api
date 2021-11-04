const { randomUUID } = require("crypto");

module.exports.Mutation = {
  addCategory: (_, { input }, { categories }) => {
    const { name } = input;

    const newCategory = {
      id: randomUUID(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },
  addProduct: (_, { input }, { products }) => {
    const { name, description, quantity, price, onSale, image } = input;

    const newProduct = {
      id: randomUUID(),
      name,
      description,
      quantity,
      price,
      onSale,
      image,
    };

    products.push(newProduct);

    return newProduct;
  },
};
