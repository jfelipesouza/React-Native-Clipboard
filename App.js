import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import Routes from './src/screens/routes';

export default function App() {
  return (
    <View style={{flex:1}} >
      <Routes/>
      <StatusBar style='auto' />
    </View>
  );
}

