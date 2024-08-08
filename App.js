import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [matricula, setMatricula] = useState('8929');
  const [isChecked, setChecked] = useState(false);
  const [selectedEmpresa, setSelectedEmpresa] = useState('');
  
  const pickerRef = useRef(null);

  const handleMatriculaChange = (text) => {
    setMatricula(text);
  };

  const handlePickerChange = (itemValue) => {
    setSelectedEmpresa(itemValue);
  };

  const openPicker = () => {
    pickerRef.current.focus();
  };

  const closePicker = () => {
    pickerRef.current.blur();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Projeto Dev</Text>
        <Ionicons style={styles.logo} name="shield-checkmark-sharp" size={32} color="green" />
      </View>

      <View style={styles.formulario}>
        <View style={styles.formularioCampo}>
          <Text>Matriculaa</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua matricula"
            onChangeText={handleMatriculaChange}
            value={matricula}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formularioCampo}>
          <Text>Empresa</Text>
          <Picker
            ref={pickerRef}
            selectedValue={selectedEmpresa}
            onValueChange={handlePickerChange}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Praia Sol" value="praia-sol" />
            <Picker.Item label="Vereda" value="vereda" />
            <Picker.Item label="Serramar" value="serramar" />
          </Picker>
        </View>

        <View style={styles.formularioCampo}>
          <View style={styles.salvarDados}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text>Manter-me conectado.</Text>
          </View>
        </View>

        <View style={styles.formularioCampo}>
          <View style={styles.formularioCampoBotaoAcessar}>
            <Button title='ACESSAR' />
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
//------------APP------------//
  container: {
    flex: 1,
    width: '100%',//TODO: TESTAR AS DIMENSÕES/ALINHAMENTOS
    backgroundColor: '#505050',
    justifyContent: 'center',
  },
//------------APP------------//

//------------HEADER------------//
  header: {
    backgroundColor: '#050505',
    height: '15%',
    width: '100%',
    alignItems: 'center',//AJUSTA O TAMANHO
    justifyContent: 'center',
  },
  titulo: {
    color: '#f0f',
    fontSize: 40,
  },
  logo: {
    backgroundColor: 'red',
  },
//------------HEADER------------//

//------------FORMULARIO------------//
  formulario: {
    width: '100%',
    backgroundColor: '#ff0',
    padding: 20,
  },
  formularioCampo: {
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  //------------FORMULARIO_CAMPO_BOTAO_ACESSAR------------//
  salvarDados: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  //------------FORMULARIO_CAMPO_BOTAO_ACESSAR------------//
  checkbox: {
    marginRight: 10,
  }
//------------FORMULARIO------------//
  
});

export default App;