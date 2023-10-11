import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Button from './components/btn/Button';
import { styles } from './components/styles/styles';
import { COLORS } from './components/styles/COLORS';
import Keyboard from './components/Keyboard';
import Display from './components/Display';
import { useState } from 'react';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', bottom: 20}}>
      <Keyboard/>
      <StatusBar style="auto" />
      </View>
      
    </View>
  );
}


