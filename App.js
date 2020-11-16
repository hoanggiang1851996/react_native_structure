/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>giang 2</Text>
      </View>
    </Provider>
  );
};

export default App;
