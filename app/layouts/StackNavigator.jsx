import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import Navigation from './Navigation'
import Item from '../screens/item'
import PreviewInvoice from '../screens/previewInvoice'
import PreviewHistoryInvoice from '../screens/previewHistoryInvoice'
import Modal from '../screens/modal'

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
            <Screen name="PreviewInvoice" component={PreviewInvoice} options={{ gestureEnabled: false }} />
            <Screen name="PreviewHistoryInvoice" component={PreviewHistoryInvoice} options={{ gestureEnabled: false }} />

            <Group screenOptions={{ presentation: 'transparentModal' }}>
                <Screen name='Item' component={Item} options={{ gestureEnabled: true }} />
                <Screen name='Modal' component={Modal} options={{ gestureEnabled: true }} />
            </Group>
        </Navigator>
    )
}

export default StackNavigator