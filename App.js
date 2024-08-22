import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';

import logoOnibus from './assets/logoOnibus.png'

const App = () => {
  const [matricula, setMatricula] = useState('');
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
        <Text style={styles.titulo}>$NOME_EMPRESA</Text>
      </View>

      <View style={styles.formulario}>


        <Image
          source={require('./assets/logoOnibus.png')}
        />

        <Text style={styles.titulo}>Login</Text>



        <View style={styles.formularioCampo}>
          <TextInput
            style={styles.input}
            placeholder="Login"
            onChangeText={handleMatriculaChange}
            value={matricula}
            keyboardType="numeric"
          />
          <Image
            style={styles.inputIcon}
            source={require('./assets/logoUser.png')}
          />
        </View>

        <View style={styles.formularioCampo}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={handleMatriculaChange}
            value={matricula}
          />
          <Image
            style={styles.inputIcon}
            source={require('./assets/logoUser.png')}
          />
        </View>


        <View style={styles.formularioCampoEmpresa}>
          <TextInput
            style={styles.input}
            placeholder="Empresa"
            onChangeText={handleMatriculaChange}
            value={matricula}
          />
          <View style={styles.inputEmpresa}>
            <Picker
              style={styles.inputEmpresaPicker}
              ref={pickerRef}
              selectedValue={selectedEmpresa}
              onValueChange={handlePickerChange}
            >
              <Picker.Item label="Empresa" value="" />
              <Picker.Item label="Praia Sol" value="praia-sol" />
              <Picker.Item label="Vereda" value="vereda" />
              <Picker.Item label="Serramar" value="serramar" />
            </Picker>
          </View>
        </View>


        <View style={styles.formularioCampo}>
          <View style={styles.salvarDados}>
            <Checkbox
              style={[styles.checkbox]}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text>Manter-me conectado.</Text>
          </View>
        </View>


        {/* <View style={styles.btnAcessar}>
          <Button
            color='#fff'
            title='ACESSAR'
            onPress={() => alert('Teste botao')} />
        </View> */}



        <Button title='Teste' buttonStyle={styles.btnstylehere} >
          
        </Button>



      </View>




      <StatusBar style="auto" />
    </View >
  );
};

const styles = StyleSheet.create({
  //------------APP------------//
  container: {
    flex: 1,
    width: '100%',//TODO: TESTAR AS DIMENSÕES/ALINHAMENTOS
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  //------------APP------------//

  //------------HEADER------------//
  header: {
    backgroundColor: '#075AA9',
    height: '15%',
    width: '100%',
    alignItems: 'center',//AJUSTA O TAMANHO
    justifyContent: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 40,
  },
  //------------HEADER------------//

  //------------FORMULARIO------------//
  formulario: {
    top: '5%',
    width: '80%',
    backgroundColor: '#075AA9',
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
    // borderWidth: 3,

  },
  formularioCampo: {
    borderStyle: 'solid',
    borderColor: '#000',
    backgroundColor: '#fff',
    marginBottom: 10,
    width: '90%',
    display: 'flex',
    flexDirection: 'row'
  },
  campo: {},
  input: {
    width: '100%',
    height: 50,
    textAlign: 'left',
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputIcon: {
    left: -40,
    top: 15
  },
  inputEmpresa: {
    color: '#fff',
  },
  formularioCampoEmpresa: {
    width: '90%'
  },
  inputEmpresaPicker: {
    color: '#fff'
  },

  //------------FORMULARIO_CAMPO_MANTER_ME_CONECTADO------------//
  salvarDados: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    marginRight: 10,
  },
  //------------FORMULARIO_CAMPO_MANTER_ME_CONECTADO------------//


  //------------FORMULARIO_CAMPO_BOTAO_ACESSAR------------//
  btnAcessar: {
    color: '#000',
    width: '90%'
  },
  btnAcessarObj: {
    color: '#000'
  },
  teste: {
    color: '#000'
  }

  //------------FORMULARIO_CAMPO_BOTAO_ACESSAR------------//

  //------------FORMULARIO------------//

});

export default App;