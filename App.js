import React from 'react';
import {View,StatusBar } from 'react-native';
import Routes from './src/screens/routes';

export default function App() {
  return (
    <View style={{flex:1}} >
      <Routes/>
      <StatusBar backgroundColor={'#123'} barStyle={'light-content'} />
    </View>
  );
}

