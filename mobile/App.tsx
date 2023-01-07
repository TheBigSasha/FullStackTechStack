import { StyleSheet, View } from 'react-native';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {API_URL} from "./constants";
import {Messages} from "./components/Messages";

const httpLink = createHttpLink({
  uri: `${API_URL}graphql`,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem("token");
  const token = ""
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "Access-Control-Allow-Origin": "*",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: `${API_URL}graphql`,
  cache: new InMemoryCache(),
});



export default function App() {
  return (
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <Messages/>
      </ApolloProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
