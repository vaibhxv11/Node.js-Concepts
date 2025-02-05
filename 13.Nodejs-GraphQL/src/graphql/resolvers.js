

// src/graphql/resolvers.js
const { products } = require('../data/products'); // Correct import

const resolvers = {
  Query: {
    products: () => products,  // This should return the products array
  },
};

module.exports = resolvers;
