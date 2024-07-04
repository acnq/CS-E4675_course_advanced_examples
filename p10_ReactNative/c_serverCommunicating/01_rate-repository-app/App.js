import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import Constants from 'expo-constants';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';


const apolloClient = createApolloClient();

// backend: http://192.168.0.118:5000/api/repositories
const App = () => {
  console.log(Constants.expoConfig);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>        
      </NativeRouter>
      <StatusBar style='auto'/>
    </>
  );
}

export default App;