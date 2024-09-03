const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./src/schema')  // Ensure this path is correct
const { resolvers } = require('./src/resolvers')  // Ensure this path is correct

const port = process.env.PORT || 9090;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
