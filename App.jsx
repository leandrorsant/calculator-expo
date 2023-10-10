import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Button from './components/btn/Button';
import { styles } from './components/styles/styles';
import { COLORS } from './components/styles/COLORS';
import Keyboard from './components/Keyboard';
export default function App() {
  return (
    <View style={styles.container}>
      <Keyboard/>
      <StatusBar style="auto" />
    </View>
  );
}


