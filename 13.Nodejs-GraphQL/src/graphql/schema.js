// src/graphql/schema.js

const { gql } = require('apollo-server'); // Correct import for Apollo Server

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
`;

module.exports = { typeDefs };  // Ensure it's exported like this
