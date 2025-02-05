// src/server.js
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./graphql/schema'); // Import typeDefs
const { resolvers } = require('./graphql/resolvers'); // Import resolvers

async function startServer() {
  const server = new ApolloServer({
    typeDefs, // Ensure typeDefs is passed
    resolvers, // Make sure resolvers are included
  });

  await server.start();

  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

startServer();
