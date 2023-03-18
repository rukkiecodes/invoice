import { View, Text } from 'react-native'
import React from 'react'

import { Image } from 'react-native'
import styles from './styles'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Invoice = ({ invoice }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <Image style={styles.logo} source={require('../../../../assets/images/logo.png')} />

                <View style={styles.leftInfo}>
                    <Text style={styles.title}>WANLAINJO COMPUTERS LTD</Text>
                    <Text style={styles.info}>Village North Professional Building</Text>
                    <Text style={styles.info}>7420 Unity Ave N #211, Brooklyn Park,</Text>
                    <Text style={styles.info}>MN 55443, United States</Text>
                    <Text style={styles.info}>wanlainjocomputers.com</Text>
                </View>
            </View>
        </View>
    )
}

export default Invoice