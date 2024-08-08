import Checkbox from 'expo-checkbox';

import { useState, useRef } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Picker } from '@react-native-picker/picker';

export default function App() {

  const [matricula, setMatricula] = useState('8929');
  const [isChecked, setChecked] = useState(false);

  const [selectedEmpresa, setSelectedLanguage] = useState();


  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>Projeto Dev</Text>
        <Ionicons style={styles.logo} name="shield-checkmark-sharp" size={32} color="green" />
      </View>

      <View style={styles.formulario}>

        <View style={[styles.formularioCampo, styles.formularioCampoMatricula]}>
          <Text>Matricula</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua matricula"
            onChange={(value => { setMatricula(value.target.value) })}
            value={matricula}
            keyboardType="numeric" />
        </View>

        <View style={[styles.formularioCampo, styles.formularioCampoEmpresa]}>
          <Text>Empresa</Text>
          <Picker
            selectedValue={selectedEmpresa}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)}>
            <Picker.Item color='#f0f' label="Selecione" value="selecione" />
            <Picker.Item label="Praia Sol" value="praia-sol" />
            <Picker.Item label="Vereda" value="vereda" />
            <Picker.Item label="Serramar" value="serramar" />
          </Picker>
        </View>

        <View style={[styles.formularioCampo, styles.formularioCampoSalvarDados]}>
          <View style={styles.salvarDados}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
            <Text>Manter-me conectado.</Text>
          </View>
        </View>

        <View style={[styles.formularioCampo, styles.formularioCampoBotao]}>
          <View style={styles.conteinerLembrarMe}>
            <View backgroundColor='#000' height='5%' />
            <Button title='ACESSAR'></Button>
            <View backgroundColor='#000' height='5%' />
          </View>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505050',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  // -------------HEADER------------- //
  header: {
    backgroundColor: '#050505',
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    color: '#f0f',
    fontSize: 40
  }, 
  logo:{
    backgroundColor: 'red'
  },// -------------HEADER------------- //

  // -------------FORMULARIO------------- //
  formulario: {
    width: '100%',
    height: 'auto',
    justifyContent: 'space-around',
    backgroundColor: '#ff0'
  }, salvarDados: {
    flexDirection: 'row'
  },
  formularioCampo: {
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  formularioCampoMatricula:{

  },
  formularioCampoEmpresa: {
    
  },
  
  conteinerLembrarMe: {

  },
  formularioCampoBotao:{

  }
  // -------------FORMULARIO------------- //


});