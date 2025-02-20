import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ControlSistema from './app/screens/botton';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicacion Gilberto!</Text>
      <ActivityIndicator/>
      <Text>Ejemplo de app!</Text>
      <StatusBar style="auto" />
      <ControlSistema/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE0D4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight:'bold',
    color:'482E1E',

  }
});
