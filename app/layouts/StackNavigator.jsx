import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import Navigation from './Navigation'
import Item from '../screens/item'

const { Navigator, Screen, Group } = createStackNavigator()

const StackNavigator = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                keyboardHandlingEnabled: true,
                animationEnabled: true,
                ...TransitionPresets.SlideFromRightIOS
            }}
        >
            <Screen name="Navigation" component={Navigation} options={{ gestureEnabled: false }} />

            <Group screenOptions={{ presentation: 'transparentModal' }}>
                <Screen name='Item' component={Item} options={{ gestureEnabled: true }} />
            </Group>
        </Navigator>
    )
}

export default StackNavigator