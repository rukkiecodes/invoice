import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function App() {
  const [name, setName] = useState('');

  const html = `
    <html>
      <body>
        <h1>${name}</h1>
        <p style="color: red;">Some text</p>
      </body>
    </html>
  `;

  let generatePDF = async () => {
    let { uri } = await printToFileAsync({
      html,
      base64: false
    });

    await shareAsync(uri);
  }

  return (
    <View style={styles.container}>
      <TextInput value={name} placeholder='name' style={styles.textInput} onChangeText={setName} />

      <Button onPress={generatePDF} title='Generate PDF' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    alignSelf: 'stretch',
    height: 40,
    margin: 8,
    padding: 8
  }
});
