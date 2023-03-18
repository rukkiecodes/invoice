import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

import { WebView } from 'react-native-webview'
import styles from './styles'

import { useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import color from '../../style/color';
import { useNavigation } from '@react-navigation/native';

const PreviewInvoice = () => {
    const { order, date, billingAddressTitle, billingAddress, shippingAddressTitle, shippingAddress, contact, salesRep, paymentTerms, items, subTotal, vat, total } = useSelector(state => state.form)

    const navigation = useNavigation()

    const html = `
  <html lang="en">
  <body style="width: 700px; max-width: 98%; margin: 20px auto;">
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
              border: 1px solid rgba(0, 0, 0, 0.4);
              border-collapse: collapse;
          }
  
          td {
              padding: .5em;
          }
      </style>
      <nav style="display: flex; justify-content: space-between; align-items: flex-end;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <img src="https://res.cloudinary.com/rukkiecodes/image/upload/v1679063972/Screenshot_2023-03-12_004935_tzmctw.png" alt="" style="width: 80px; margin-right: .5em;">
              <div>
                  <p style="font-size: 0.6rem; color: #0374E5; font-weight: 700; margin-bottom: .4em;">WANLAINJO</p>
                  <p style="font-size: 0.6rem; color: #0374E5; margin-bottom: .4em;">Village North Professional Building</p>
                  <p style="font-size: 0.6rem; color: #0374E5; margin-bottom: .4em;">7420 Unity Ave N #211, Brooklyn Park, MN 55443, United States</p>
                  <p style="font-size: 0.6rem; color: #0374E5; margin-bottom: .4em;">wanlainjocomputers.com</p>
                  <div>
                      <p
                          style="display: flex; justify-content: flex-start; align-items: center; font-size: 0.6rem; color: #0374E5;">
                          <span style="width: 50px; margin-bottom: .4em;">Email</span>
                          <span>Info@wanlainjo.org</span>
                      </p>
                      <p
                          style="display: flex; justify-content: flex-start; align-items: center; font-size: 0.6rem; color: #0374E5;">
                          <span style="width: 50px; margin-bottom: .4em;">Tel</span> <span>+1 952-200-8199</span>
                      </p>
                  </div>
              </div>
          </div>
          <div style="width: 250px;">
              <p style="font-size: 1.7rem; text-align: right; margin-right: .4em;">Sales Order</p>
              <div style="border: 1px solid rgba(0, 0, 0, 0.4); margin: 0; padding: .5em;">
                  <p
                      style="width: 100%; display: flex; justify-content: space-between; align-items: center; font-size: .8rem;">
                      <span style="color: #0374E5;">Order #</span><span>${order}</span>
                  </p>
                  <p
                      style="width: 100%; display: flex; justify-content: space-between; align-items: center; font-size: .8rem;">
                      <span style="color: #0374E5;">Date</span><span>${date}</span>
                  </p>
              </div>
          </div>
      </nav>
  
      <div
          style="width: 100%; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-top: 2em;">
          <div style="width: 50%; display: flex; justify-content: flex-start; align-items: flex-start;">
              <span style="font-size: .8rem; color: #0374E5;">Billing Address</span>
  
              <div style="margin-left: 90px;">
                  <p style="font-size: .8rem; font-weight: 700; width: 150px;">${billingAddressTitle}</p>
                  <p style="font-size: .8rem; width: 150px;">${billingAddress}</p>
              </div>
          </div>
          <div style="width: 50%; display: flex; justify-content: flex-start; align-items: flex-start;">
              <span style="font-size: .8rem; color: #0374E5;">Shipping Address</span>
  
              <div style="margin-left: 90px;">
                  <p style="font-size: .8rem; font-weight: 700; width: 150px;">${shippingAddressTitle}</p>
              </div>
          </div>
          <div
              style="width: 50%; display: flex; justify-content: flex-start; align-items: flex-start; margin-top: 1.5em;">
              <span style="font-size: .8rem; color: #0374E5;">Contact</span>
  
              <div style="margin-left: 90px;">
                  <p style="font-size: .8rem; width: 150px;">${contact}</p>
              </div>
          </div>
      </div>
  
      <table style="width: 100%; margin-top: 2em;">
          <tr style="background-color: #E1E1E1;">
              <td style="font-size: .8rem; color: #0374E5;">Sales Rep</td>
              <td style="font-size: .8rem; color: #0374E5;">Payment Terms</td>
          </tr>
          <tr>
              <td style="font-size: .8rem;">${salesRep}</td>
              <td style="font-size: .8rem;">
                    ${paymentTerms.map(item => {
        return `<p>${item}</p>`
    })
        }
              </td>
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
          ${items.map((item) => {
            return `
              <tr>
                  <td style="font-size: .8rem;">${item.name}</td>
                  <td style="font-size: .8rem;">${item.description}</td>
                  <td style="font-size: .8rem;">${item.quantity}</td>
                  <td style="font-size: .8rem;">N ${item.unitPrice}</td>
                  <td style="font-size: .8rem;">N ${item.subTotal}</td>
              </tr>
              `;
        }).join('')
        }
      </table>
  
      <div style="margin-top: 2em; width: 100%; display: flex; justify-content: flex-end; align-items: flex-start;">
          <table style="border: none;">
              <tr>
                  <td style="border: none; width: 100px; font-size: .8rem; color: #0374E5;">Sub-Total</td>
                  <td style="font-size: .8rem; text-align: right;">$ ${subTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
              <tr>
                  <td style="border: none; width: 100px; font-size: .8rem; color: #0374E5;">VAT (7.5%)</td>
                  <td style="font-size: .8rem; text-align: right;">$ ${vat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
              <tr>
                  <td style="border: none; width: 100px; color: #0374E5; font-size: 1rem;">Total</td>
                  <td style="font-size: 1rem; text-align: right;">$ ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>
          </table>
      </div>
  </body>
  </html>
  `;

    let sharePDF = async () => {
        let { uri } = await printToFileAsync({
            html,
            base64: false
        })

        await shareAsync(uri)
    }

    return (
        <View style={styles.container}>
            <WebView source={{ html: html }} />
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.goBackBytton} onPress={() => navigation.goBack()}>
                    <AntDesign name="back" size={24} color={color.accent} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} onPress={sharePDF}>
                    <Text style={styles.shareButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PreviewInvoice