import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

import styles from './styles'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { TextInput, Keyboard } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
  setOrder,
  setDate,
  setBillingAddress,
  setBillingAddressTitle,
  setShippingAddressTitle,
  setShippingAddress,
  setContact,
  setSalesRep,
  setPaymentTerms,
  setItems,
  setSubTotal,
  setVat,
  setTotal,
  setUseVAT,
  deleteTerm,
  deleteItem
} from '../../features/useFormSlice'
import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons';

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../hooks/firebase'
import color from '../../style/color'

import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const CreateInvoice = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { order, date, billingAddressTitle, billingAddress, shippingAddressTitle, shippingAddress, contact, salesRep, paymentTerms, items, subTotal, vat, total, useVAT } = useSelector(state => state.form)

  const [loading, setLoading] = useState(false)
  const [initialTerm, setInitialTerm] = useState('')
  const [buttonVisiblity, setButtonVisiblity] = useState(false)

  useEffect(() => {
    disableButton()
  }, [])

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
                  <td style="font-size: .8rem; text-align: right;">$ ${subTotal}</td>
              </tr>
              <tr>
                  <td style="border: none; width: 100px; font-size: .8rem; color: #0374E5;">VAT (7.5%)</td>
                  <td style="font-size: .8rem; text-align: right;">$ ${vat}</td>
              </tr>
              <tr>
                  <td style="border: none; width: 100px; color: #0374E5; font-size: 1rem;">Total</td>
                  <td style="font-size: 1rem; text-align: right;">$ ${total}</td>
              </tr>
          </table>
      </div>
  </body>
  </html>
  `;

  const saveInvoice = async () => {
    let calcSubTotal = 0
    let calcVat = 0
    let calcTotal = 0

    items.forEach(item => {
      calcSubTotal = calcSubTotal + parseFloat(item.subTotal)
    })

    calcVat = calcSubTotal * 0.075
    calcTotal = calcSubTotal + (useVAT ? calcVat : 0)

    dispatch(setSubTotal(calcSubTotal))
    dispatch(setVat(useVAT ? calcVat : 0))
    dispatch(setTotal(calcTotal))

    setLoading(true)
    await addDoc(collection(db, 'invoices'), {
      order,
      date,
      billingAddressTitle,
      billingAddress,
      shippingAddressTitle,
      shippingAddress,
      contact,
      salesRep,
      paymentTerms,
      items,
      subTotal,
      vat,
      total
    })
    setLoading(false)
    navigation.navigate('Modal', {
      title: 'Invoice saved successfully',
      body: 'Your invoice has been saved successfully'
    })
  }

  const preview = () => {
    let calcSubTotal = 0
    let calcVat = 0
    let calcTotal = 0

    items.forEach(item => {
      calcSubTotal = calcSubTotal + parseFloat(item.subTotal)
    })

    calcVat = calcSubTotal * 0.075
    calcTotal = calcSubTotal + (useVAT ? calcVat : 0)

    dispatch(setSubTotal(calcSubTotal))
    dispatch(setVat(useVAT ? calcVat : 0))
    dispatch(setTotal(calcTotal))

    navigation.navigate('PreviewInvoice')
  }

  let sharePDF = async () => {
    let { uri } = await printToFileAsync({
      html,
      base64: false
    })

    await shareAsync(uri)
  }

  const disableButton = () => {
    if (date != '' && (billingAddressTitle != '' || billingAddress != '') && (shippingAddressTitle != '' || shippingAddress != '') && contact != '' && salesRep != '' && items.length >= 1)
      setButtonVisiblity(true)
    else setButtonVisiblity(false)
  }

  Keyboard.addListener('keyboardDidHide', () => {
    disableButton()
  })

  Keyboard.addListener('keyboardDidShow', () => {
    disableButton()
  })

  return (
    <View style={styles.container}>

      <ScrollView style={styles.formSrollview} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.left}>
            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />

            <View style={styles.leftInfo}>
              <Text style={styles.title}>WANLAINJO COMPUTERS LTD</Text>
              <Text style={styles.info}>Village North Professional Building</Text>
              <Text style={styles.info}>7420 Unity Ave N #211, Brooklyn Park,</Text>
              <Text style={styles.info}>MN 55443, United States</Text>
              <Text style={styles.info}>wanlainjocomputers.com</Text>
            </View>
          </View>
        </View>
        <TextInput placeholder='Order' style={styles.input} value={order} onChangeText={e => dispatch(setOrder(e))} readOnly={true} />
        <TextInput placeholder='Date' style={styles.input} value={date} onChangeText={e => dispatch(setDate(e))} />

        <View style={styles.billingAddress}>
          <Text style={styles.billingAddressText}>Billing Address</Text>
          <TextInput placeholder='Billing Address Title' style={styles.input} value={billingAddressTitle} onChangeText={e => dispatch(setBillingAddressTitle(e))} />
          <TextInput placeholder='Billing Address' style={{ ...styles.input, marginBottom: 0 }} value={billingAddress} onChangeText={e => dispatch(setBillingAddress(e))} />
        </View>

        <View style={styles.billingAddress}>
          <Text style={styles.billingAddressText}>Shipping Address</Text>
          <TextInput placeholder='Shipping Address Title' style={styles.input} value={shippingAddressTitle} onChangeText={e => dispatch(setShippingAddressTitle(e))} />
          <TextInput placeholder='Shipping Address' style={{ ...styles.input, marginBottom: 0 }} value={shippingAddress} onChangeText={e => dispatch(setShippingAddress(e))} />
        </View>
        <TextInput placeholder='Contact' style={styles.input} value={contact} onChangeText={e => dispatch(setContact(e))} />
        <TextInput placeholder='Sales Rep' style={styles.input} value={salesRep} onChangeText={e => dispatch(setSalesRep(e))} />

        <View style={styles.terms}>
          <View style={styles.termsControl}>
            <TextInput placeholder='Payment Terms' style={{ ...styles.input, flex: 1, marginRight: 10, marginBottom: 0 }} value={initialTerm} onChangeText={setInitialTerm} />
            <TouchableOpacity style={styles.termsControlButton} onPress={() => {
              dispatch(setPaymentTerms(initialTerm))
              setInitialTerm('')
            }}>
              <Text style={styles.termsControlButtonText}>Add Term</Text>
            </TouchableOpacity>
          </View>

          {
            paymentTerms.length >= 1 &&
            <View style={styles.termsList}>
              {
                paymentTerms.map((term, index) => (
                  <View style={styles.termsListItem} key={index}>
                    <Text style={styles.termsListItemTitle}>Term {index + 1}</Text>

                    <View style={styles.termsListItemRightSide}>
                      <Text style={styles.termsListItemValue}>{term}</Text>

                      <TouchableOpacity style={styles.deleteButton} onPress={() => dispatch(deleteTerm(index))}>
                        <AntDesign name="close" size={16} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
              }
            </View>
          }
        </View>

        <View style={styles.itemContol}>
          <Text style={styles.itemText}>Items</Text>

          <TouchableOpacity style={styles.itemButton} onPress={() => navigation.navigate('Item')}>
            <Text style={styles.itemButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>

        {
          items.map((item, index) => (
            <View style={styles.itemsList} key={index}>
              <View style={styles.itemsListHeader}>
                <Text style={styles.itemsListIndex}>Item One({index + 1})</Text>

                <TouchableOpacity style={styles.deleteButton} onPress={() => dispatch(deleteItem(index))}>
                  <AntDesign name="close" size={16} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.itemsListItem}>
                <Text style={styles.itemsListItemTitle}>Item Name:</Text>
                <Text style={styles.itemsListItemValue}>{item?.name}</Text>
              </View>
              <View style={styles.itemsListItem}>
                <Text style={styles.itemsListItemTitle}>Item Description:</Text>
                <Text style={styles.itemsListItemValue}>{item?.description}</Text>
              </View>
              <View style={styles.itemsListItem}>
                <Text style={styles.itemsListItemTitle}>Quantity:</Text>
                <Text style={styles.itemsListItemValue}>{item?.quantity}</Text>
              </View>
              <View style={styles.itemsListItem}>
                <Text style={styles.itemsListItemTitle}>Unit Price:</Text>
                <Text style={styles.itemsListItemValue}>{item?.unitPrice}</Text>
              </View>
              <View style={styles.itemsListItem}>
                <Text style={styles.itemsListItemTitle}>Sub-Total:</Text>
                <Text style={styles.itemsListItemValue}>{item?.subTotal}</Text>
              </View>
            </View>
          ))
        }

        <View style={styles.itemContol}>
          <Text style={styles.itemText}>Value Added Task(VAT)</Text>

          <View style={styles.vatToggles}>
            <TouchableOpacity onPress={() => dispatch(setUseVAT(false))} style={{ ...styles.vatToggle, backgroundColor: !useVAT ? color.accent : `${color.accent}20` }}>
              <Text style={{ ...styles.vatToggleText, color: !useVAT ? color.white : color.accent }}>OFF</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(setUseVAT(true))} style={{ ...styles.vatToggle, backgroundColor: useVAT ? color.accent : `${color.accent}20` }}>
              <Text style={{ ...styles.vatToggleText, color: useVAT ? color.white : color.accent }}>ON</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.controles}>
        <TouchableOpacity style={styles.shareButton} onPress={preview} disabled={buttonVisiblity == false}>
          <Feather name="eye" size={24} color="black" style={{ ...styles.shareButtonIcon, color: buttonVisiblity ? color.accent : `${color.black}40` }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.saveButton, backgroundColor: buttonVisiblity ? color.accent : `${color.accent}40` }} onPress={saveInvoice} disabled={buttonVisiblity == false}>
          {
            loading ? <ActivityIndicator size='small' color='white' /> : <Text style={styles.saveButtonText}>Save Invoice</Text>
          }
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton} onPress={sharePDF} disabled={buttonVisiblity == false}>
          <Feather name="share-2" size={24} color="black" style={{ ...styles.shareButtonIcon, color: buttonVisiblity ? color.accent : `${color.black}40` }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateInvoice