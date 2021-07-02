import React from 'react';
import Camera from './Camera';
import {SafeAreaView, Text} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      <Camera />
      <Text>Hello!!</Text>
    </SafeAreaView>
  );
};
export default App;
