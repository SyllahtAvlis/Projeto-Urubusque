import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'aluno' && password === 'Senai1234') {
      navigation.navigate('Home');
    } else if (username === 'root' && password === 'root') {
      navigation.navigate('AdminHome');
    } else {
      setErrorMessage('Usuário ou senha incorretos.');
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  const handleRegister = () => navigation.navigate('Cadastro');
  const handleForgotPassword = () => navigation.navigate('ForgotPassword');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.bubbleContainer}>
        <Image
          source={require('../img/urubuscoholmes.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>Urubusque</Text>
        </View>
      </View> 

      <Text style={styles.title}>Bem-vindo!</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#C52613"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#C52613"
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: 'black',
  },
  bubbleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  bubble: {
    backgroundColor: '#C52613',
    borderWidth: 1,
    borderColor: '#C52613',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#C52613',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  bubbleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    textAlign: 'center',
    color: '#C52613',
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderColor: '#C52613',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    color: '#C52613',
    borderRadius: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#C52613',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#C52613',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  loginButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#C52613',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  error: {
    color: '#C52613',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
