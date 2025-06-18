import React, { useState } from 'react';
import { Button, Text, View, Image, StyleSheet, TextInput } from 'react-native';

const App = () => {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Image source={require('./assets/clbooks.png')} />

        <Text style={styles.label}>Entrar:</Text>

        <TextInput
          style={styles.input}
          placeholder="Email ou usuário"
          placeholderTextColor="#2B2A2A"
          onChangeText={(texto) => setLogin(texto)}
          defaultValue={login}
        />

        <TextInput
          style={[styles.input, { marginTop: 15 }]}
          placeholder="Senha"
          placeholderTextColor="#2B2A2A"
          secureTextEntry
          onChangeText={(texto) => setSenha(texto)}
          defaultValue={senha}
        />

        <Text style={[styles.label2, { marginTop: 10 }]}>Esqueci a senha</Text>


        <View style={{ marginTop: 20 }}>
          <Button title="Entrar" onPress={() => { }} color="#6EB1DF" />
          <Text style={styles.footerText2}>Criar uma conta</Text>
        </View>
      </View>


      <View style={styles.footer}>

        <Text style={styles.footerText}>clbooks | política de privacidade</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111F',
    padding: 20,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // centraliza verticalmente
  },
  label: {
    color: '#E8E8E8',
    marginTop: 10,
    fontWeight: 600,
  },
  label2: {
    color: '#E8E8E8',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#D9D9D9',
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  footerText: {
    color: '#E8E8E8',
    fontSize: 12,
    fontWeight: 600,
  },
  footerText2: {
    color: '#E8E8E8',
    fontSize: 14,
    marginLeft: 110,
    fontWeight: 600,
  },
});

