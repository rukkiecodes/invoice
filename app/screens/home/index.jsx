import { View, Text } from 'react-native'
import React from 'react'

import styles from './styles'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native'

const Home = () => {
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

      <ScrollView style={styles.formSrollview}>
        <TextInput placeholder='Order' style={styles.input} />
        <TextInput placeholder='Date' style={styles.input} />
        <TextInput placeholder='Billing Address' style={styles.input} />
        <TextInput placeholder='Shipping Address' style={styles.input} />
        <TextInput placeholder='Contact' style={styles.input} />
        <TextInput placeholder='Sales Rep' style={styles.input} />
        <TextInput placeholder='Payment Terms' style={styles.input} />

        <View style={styles.itemContol}>
          <Text style={styles.itemText}>Items</Text>

          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.controles}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Invoice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Feather name="share-2" size={24} color="black" style={styles.shareButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home