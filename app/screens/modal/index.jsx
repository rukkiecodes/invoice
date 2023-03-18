import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

const Modal = () => {
    const { title, body } = useRoute().params
    const navigattion = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.sheet}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>

                    <TouchableOpacity style={styles.closeButton} onPress={() => navigattion.goBack()}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.body}>{body}</Text>
            </View>
        </View>
    )
}

export default Modal