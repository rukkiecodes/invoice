import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

import styles from './styles'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native'
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
  setTotal
} from '../../features/useFormSlice'
import { useNavigation } from '@react-navigation/native'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../hooks/firebase'

const Home = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { order, date, billingAddressTitle, billingAddress, shippingAddressTitle, shippingAddress, contact, salesRep, paymentTerms, items, subTotal, vat, total } = useSelector(state => state.form)

  const [loading, setLoading] = useState(false)
  const [initialTerm, setInitialTerm] = useState('')

  const saveInvoice = async () => {
    let calcSubTotal = 0
    let calcVat = 0
    let calcTotal = 0

    items.forEach(item => {
      calcSubTotal = calcSubTotal + parseFloat(item.subTotal)
    })

    calcVat = calcSubTotal * 0.075
    calcTotal = calcSubTotal + calcVat

    dispatch(setSubTotal(calcSubTotal))
    dispatch(setVat(calcVat))
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
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />

          <View style={styles.leftInfo}>
            <Text style={styles.title}>WANLAINJO COMPUTERS LTD</Text>
            <Text style={styles.info}>312 NTA CHOBA ROAD</Text>
            <Text style={styles.info}>20 PEREMABIRI STREET DLINE PORT HARCOURT, RIVERS</Text>
            <Text style={styles.info}>wanlainjocomputers.com</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.formSrollview} showsVerticalScrollIndicator={false}>
        <TextInput placeholder='Order' style={styles.input} value={order} onChangeText={e => dispatch(setOrder(e))} />
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

          <View style={styles.termsList}>
            {
              paymentTerms.map((term, index) => (
                <View style={styles.termsListItem} key={index}>
                  <Text style={styles.termsListItemTitle}>Term {index + 1}</Text>
                  <Text style={styles.termsListItemValue}>{term}</Text>
                </View>
              ))
            }
          </View>
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
              <Text style={styles.itemsListIndex}>Item One({index + 1})</Text>
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
      </ScrollView>

      <View style={styles.controles}>
        <TouchableOpacity style={styles.shareButton}>
          <Feather name="eye" size={24} color="black" style={styles.shareButtonIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={saveInvoice}>
          {
            loading ? <ActivityIndicator size='small' color='white' /> : <Text style={styles.saveButtonText}>Save Invoice</Text>
          }
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton}>
          <Feather name="share-2" size={24} color="black" style={styles.shareButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home