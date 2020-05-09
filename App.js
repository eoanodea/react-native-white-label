import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import modules from './modules';
// const styles = require('./theme')('App');

export default () => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <Text>White-Label App</Text>
    <View>
      {modules.map(({name, Component}) => (
        <Component key={name} />
      ))}
    </View>
  </SafeAreaView>
);
