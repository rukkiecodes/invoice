import { View, Text } from 'react-native'
import React, { useState } from 'react'

import styles from './styles'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { setItems } from '../../features/useFormSlice'

const Item = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const [unitPrice, setUnitPrice] = useState('')

  const setItem = () => {
    dispatch(setItems({
      name: name.toLocaleUpperCase(),
      description: description.toLocaleUpperCase(),
      quantity,
      unitPrice,
      subTotal: quantity * unitPrice
    }))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.sheet}>
        <View style={styles.sheetHead}>
          <Text style={styles.title}>Add a new item</Text>

          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TextInput placeholder='Item name' style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder='Description' style={styles.input} value={description} onChangeText={setDescription} />
        <TextInput placeholder='Quantity' keyboardType='number-pad' style={styles.input} value={quantity} onChangeText={setQuantity} />
        <TextInput placeholder='Unit Price' keyboardType='number-pad' style={styles.input} value={unitPrice} onChangeText={setUnitPrice} />

        <TouchableOpacity style={styles.addButton} onPress={setItem}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Item 