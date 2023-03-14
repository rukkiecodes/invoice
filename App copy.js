import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

import logo from './assets/images/logo.png';

export default function App() {
  const [name, setName] = useState('');

  const html = `
  <html lang="en">
  <body style="width: 800px; max-width: 98%; margin: 20px auto;">
      <style>
          * {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              box-sizing: border-box;
              margin: 0;
              padding: 0;
          }
  
          table,
          th,
          td {
              border: 1px solid black;
              border-collapse: collapse;
          }
  
          td {
              padding: .5em;
          }
      </style>
      <nav style="display: flex; justify-content: space-between; align-items: flex-end;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <img src="${logo}" alt="" style="width: 100px; margin-right: .5em;">
              <div>
                  <p style="font-size: 0.6rem; color: #0374E5; font-weight: 700; margin-bottom: .4em;">WANLAINJO COMPUTERS
                      LTD</p>
                  <p style="font-size: 0.6rem; color: #0374E5; margin-bottom: .4em;">312 NTA CHOBA ROAD</p>
                  <p style="font-size: 0.6rem; color: #0374E5; margin-bottom: .4em;">20 PEREMABIRI STREET DLINE PORT
                      HARCOURT, RIVERS</p>
                  <p style="font-size: 0.6rem; color: #0374E5; margin-bottom: .4em;">wanlainjocomputers.com</p>
                  <div>
                      <p
                          style="display: flex; justify-content: flex-start; align-items: center; font-size: 0.6rem; color: #0374E5;">
                          <span style="width: 50px; margin-bottom: .4em;">Email</span>
                          <span>shop@wanlainjocomputers.com</span>
                      </p>
                      <p
                          style="display: flex; justify-content: flex-start; align-items: center; font-size: 0.6rem; color: #0374E5;">
                          <span style="width: 50px; margin-bottom: .4em;">Tel</span> <span>08145615252</span>
                      </p>
                      <p
                          style="display: flex; justify-content: flex-start; align-items: center; font-size: 0.6rem; color: #0374E5;">
                          <span style="width: 50px; margin-bottom: .4em;">Fax</span> <span>09131136595</span>
                      </p>
                  </div>
              </div>
          </div>
          <div style="width: 250px;">
              <p style="font-size: 1.7rem; text-align: right; margin-right: .4em;">Sales Order</p>
              <div style="border: 1px solid #000; margin: 0; padding: .5em;">
                  <p
                      style="width: 100%; display: flex; justify-content: space-between; align-items: center; font-size: .8rem;">
                      <span style="color: #0374E5;">Order #</span><span>SO-000237</span>
                  </p>
                  <p
                      style="width: 100%; display: flex; justify-content: space-between; align-items: center; font-size: .8rem;">
                      <span style="color: #0374E5;">Date</span><span>3/10/2023</span>
                  </p>
              </div>
          </div>
      </nav>
  
      <div
          style="width: 100%; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-top: 2em;">
          <div style="width: 50%; display: flex; justify-content: flex-start; align-items: flex-start;">
              <span style="font-size: .8rem; color: #0374E5;">Billing Address</span>
  
              <div style="margin-left: 90px;">
                  <p style="font-size: .8rem; font-weight: 700; width: 150px;">BUA FOOD</p>
                  <p style="font-size: .8rem; width: 150px;">bua food PORT HARCOURT, RIVERS NIGERIA</p>
              </div>
          </div>
          <div style="width: 50%; display: flex; justify-content: flex-start; align-items: flex-start;">
              <span style="font-size: .8rem; color: #0374E5;">Shipping Address</span>
  
              <div style="margin-left: 90px;">
                  <p style="font-size: .8rem; font-weight: 700; width: 150px;">BUA FOOD</p>
              </div>
          </div>
          <div
              style="width: 50%; display: flex; justify-content: flex-start; align-items: flex-start; margin-top: 1.5em;">
              <span style="font-size: .8rem; color: #0374E5;">Contact</span>
  
              <div style="margin-left: 90px;">
                  <p style="font-size: .8rem; width: 150px;">08037984354</p>
              </div>
          </div>
      </div>
  
      <table style="width: 100%; margin-top: 2em;">
          <tr style="background-color: #E1E1E1;">
              <td style="font-size: .8rem; color: #0374E5;">Sales Rep</td>
              <td style="font-size: .8rem; color: #0374E5;">Payment Terms</td>
          </tr>
          <tr>
              <td style="font-size: .8rem;">WANLAINJO</td>
              <td style="font-size: .8rem;">.</td>
          </tr>
      </table>
  
      <table style="width: 100%; margin-top: 2em;">
          <tr style="background-color: #E1E1E1;">
              <td style="font-size: .8rem; color: #0374E5;">Item</td>
              <td style="font-size: .8rem; color: #0374E5;">Description</td>
              <td style="font-size: .8rem; color: #0374E5;">Quantity</td>
              <td style="font-size: .8rem; color: #0374E5;">Unit Price</td>
              <td style="font-size: .8rem; color: #0374E5;">Sub-Total</td>
          </tr>
          <tr>
              <td style="font-size: .8rem;">HARD DRIVE</td>
              <td style="font-size: .8rem;">500 GB STORAGE</td>
              <td style="font-size: .8rem;">2</td>
              <td style="font-size: .8rem;">N 12,000.00</td>
              <td style="font-size: .8rem;">N 24,000.00</td>
          </tr>
      </table>
  
      <div style="margin-top: 2em; width: 100%; display: flex; justify-content: flex-end; align-items: flex-start;">
          <table style="border: none;">
              <tr>
                  <td style="border: none; width: 100px; font-size: .8rem; color: #0374E5;">Sub-Total</td>
                  <td style="font-size: .8rem; text-align: right;">N 34,000.00</td>
              </tr>
              <tr>
                  <td style="border: none; width: 100px; font-size: .8rem; color: #0374E5;">VAT (7.5%)</td>
                  <td style="font-size: .8rem; text-align: right;">N 2,550.00</td>
              </tr>
              <tr>
                  <td style="border: none; width: 100px; color: #0374E5; font-size: 1rem;">Total</td>
                  <td style="font-size: 1rem; text-align: right;">N 36,550.00</td>
              </tr>
          </table>
      </div>
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
