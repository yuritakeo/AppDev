import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Projeto Dev</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center'
  },
  header:{
    backgroundColor: '#ff0',
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    color: '#f0f',
    fontSize: 40
  }
});