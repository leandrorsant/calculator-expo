import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Button from './components/btn/Button';
import { styles } from './components/styles/styles';
import { COLORS } from './components/styles/COLORS';
import Keyboard from './components/Keyboard';
import Display from './components/Display';
import { useState } from 'react';

//const [mathExpression, setMathExpression] = useState('');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', bottom: 20}}>
      <Display displayText='Test'/>
      <Keyboard/>
      <StatusBar style="auto" />
      </View>
      
    </View>
  );
}


