import { ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
const httpLink = createHttpLink({
  uri: 'http://192.168.0.118:4000/graphql'
});
const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;