import {
  Text,
  View,
} from 'react-native';

import React from 'react';
import Expo from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 56 }}>
          Hello, world!
        </Text>
      </View>
    );
  }
}

Expo.registerRootComponent(App);
