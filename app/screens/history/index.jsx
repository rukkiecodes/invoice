import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../hooks/firebase'
import { FlatList } from 'react-native'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import color from '../../style/color'

const History = () => {
    const navigation = useNavigation()
    const [history, setHistory] = useState([])

    useEffect(() => {
        fetchHistory()
    }, [db])

    const fetchHistory = () => {
        // fetch history from database
        const unsub = onSnapshot(collection(db, 'invoices'), (querySnapshot) => {
            const history = []
            querySnapshot.forEach((doc) => {
                history.push({ ...doc.data(), id: doc.id })
            })
            setHistory(history)
        })

        return unsub
    }
    return (
        <View style={styles.container}>
            {
                history.length >= 1 ?
                    <FlatList
                        data={history}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <>
                                <Pressable style={{ ...styles.item, marginBottom: (index + 1) == history.length ? 20 : 0 }} onPress={() => navigation.navigate('PreviewHistoryInvoice', { invoice: item })}>
                                    <View style={styles.content}>
                                        <View style={styles.contentItem}>
                                            <Text>Order</Text>
                                            <Text>{item?.order}</Text>
                                        </View>
                                        <View style={styles.contentItem}>
                                            <Text>Date</Text>
                                            <Text>{item?.date}</Text>
                                        </View>
                                        <View style={styles.contentItem}>
                                            <Text>Billing Address</Text>
                                            <Text>{item?.billingAddressTitle}</Text>
                                        </View>
                                        <View style={styles.contentItem}>
                                            <Text>Shipping Address</Text>
                                            <Text>{item?.shippingAddressTitle}</Text>
                                        </View>
                                    </View>
                                </Pressable>

                                <View style={{ width: '80%', height: 1, backgroundColor: `${color.black}20`, alignSelf: 'center' }}></View>
                            </>
                        )}
                    /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>You Do not have any saved Invoice yet</Text>
                    </View>
            }
        </View>
    )
}

export default History