const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { Query } = require("./graphql/resolvers/Query");
const { Category } = require("./graphql/resolvers/Category");
const { Product } = require("./graphql/resolvers/Product");
const { typeDefs } = require("./graphql/schema");
const { products, categories, reviews } = require("./db");

const resolvers = {
  Query,
  Category,
  Product,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: {
    products,
    categories,
    reviews,
  },
});

server
  .listen({ port: 4001 })
  .then(({ url }) => console.log(`Server is ready at ${url} 🚀`));
