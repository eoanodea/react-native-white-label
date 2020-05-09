import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import modules from './modules';

import styles from './theme/solarized-dark/App';

export default () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>White-Label App</Text>
    <View>
      {modules.map(({name, Component}) => (
        <Component key={name} />
      ))}
    </View>
  </SafeAreaView>
);
