import Checkbox from 'expo-checkbox';

import { useState, useRef } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {

  const [matricula, setMatricula] = useState('Useless Text');
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Projeto Dev</Text>
        <Ionicons name="shield-checkmark-sharp" size={32} color="green" />
      </View>

      <View style={styles.formulario}>
        <View style={styles.formularioCampoMatricula}>

          <Text>Matriculaa</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua matricula"
            onChange={(value => { setMatricula(value.target.value) })}
            value={matricula}
            keyboardType="numeric"
            color='#000'
          />

          <Text>Empresa</Text>
          <TextInput
            style={styles.input}
            placeholder="Selecione a empresa"
            keyboardType="text"
            color='#000'
          />

          <View style={styles.salvarDados}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text>Manter-me conectado.</Text>
          </View>


          <View backgroundColor='#000' height='5%' />
          <Button title='ACESSAR'></Button>
          <View backgroundColor='#000' height='5%' />

        </View>
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
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#ff0',
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    color: '#f0f',
    fontSize: 40
  }, formulario: {

  },
  formularioCampoMatricula: {

  }, salvarDados: {
    flexDirection: 'row'
  }
});