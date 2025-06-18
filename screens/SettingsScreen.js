// screens/SettingsScreen.js

import { View, Text, StyleSheet, ScrollView } from 'react-native';

function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.bubbleContainer}>

        <View>
          <Text style={styles.title}>Meu aplicativo</Text>
        </View>

        <View>
          <Text style={styles.text}>Versão: Versão 1.8</Text>
        </View>

        <View>
          <Text style={styles.text}>Desenvolvido por: Essquadrão Topete</Text>
        </View>

        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>Visite nosso site</Text>
        </View>

        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>Entre em contato por email</Text>
        </View>

        <View>
          <Text style={styles.text}>2025 Esquadrão Topete. Todos os direitos reservados</Text>
        </View>

      </View>

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
  text: {
    color: '#C52613',
    fontSize: 12,
    marginBottom: 20
  },
  bubbleContainer: {
    alignItems: 'center',
    marginBottom: 30,
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
    marginBottom: 20
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
});

export default SettingsScreen;