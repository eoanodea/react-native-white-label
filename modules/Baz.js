import React from 'react';
import {Text, View} from 'react-native';
import styles from '../theme/solarized-light/Module';

const BazComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Module <Text style={styles.accent}>Baz</Text>
    </Text>
  </View>
);

export default {
  name: 'Baz',
  Component: BazComponent,
};
