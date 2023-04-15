import { Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { Navigator, Screen } = createMaterialTopTabNavigator();

// Colors
import color from '../style/color';

// style
import nav from '../style/navigation';

// SREENS
import CreateInvoice from '../screens/createInvoice'
import History from '../screens/history'

const Navigation = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: color.white }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StatusBar style="dark" />
            <Navigator
                screenOptions={{
                    lazy: true,
                    swipeEnabled: true,
                    tabBarIndicatorStyle: {
                        backgroundColor: color.accent,
                    },

                    tabBarStyle: {
                        ...nav.barStyle
                    }
                }}
            >
                <Screen
                    name="Create Invoice"
                    component={CreateInvoice}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ ...nav.tabLabel, color: focused ? color.accent : color.dark }}>
                                Create
                            </Text>
                        )
                    }}
                />
                <Screen
                    name="History"
                    component={History}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ ...nav.tabLabel, color: focused ? color.accent : color.dark }}>
                                History
                            </Text>
                        )
                    }}
                />
            </Navigator>
        </KeyboardAvoidingView>
    )
}

export default Navigation