import * as React from 'react';
import { Provider } from 'react-redux';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { store } from './store/store';
import { MainContainer } from './views/MainContainer';


export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <MainContainer/>
    </ChakraProvider>
  </Provider>
);
