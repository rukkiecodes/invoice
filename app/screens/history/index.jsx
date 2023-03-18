import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../hooks/firebase'
import { FlatList } from 'react-native'
import Invoice from './components/Invoice'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

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
            <FlatList
                data={history}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Pressable style={{ ...styles.item, marginBottom: (index + 1) == history.length ? 20 : 0 }} onPress={() => navigation.navigate('PreviewHistoryInvoice', { invoice: item })}>
                        <View style={styles.window}>
                            <Invoice invoice={item} />
                        </View>

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
                )}
            />
        </View>
    )
}

export default History