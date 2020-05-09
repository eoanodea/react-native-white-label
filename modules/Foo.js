import React from 'react';
import {Text, View} from 'react-native';
import styles from '../theme/solarized-dark/Module';

const FooComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Module <Text style={styles.accent}>Foo</Text>
    </Text>
  </View>
);

export default {
  name: 'Foo',
  Component: FooComponent,
};
