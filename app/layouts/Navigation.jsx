import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { Navigator, Screen } = createMaterialTopTabNavigator();

// Colors
import color from '../style/color';

// style
import nav from '../style/navigation';

// SREENS
import Home from '../screens/Home'

const Navigation = () => {
    return (
        <Navigator
            screenOptions={{
                lazy: true,
                swipeEnabled: false,
                tabBarIndicatorStyle: {
                    backgroundColor: color.accent,
                },

                tabBarStyle: {
                    ...nav.barStyle
                }
            }}
            tabBarPosition="bottom"
        >
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}

export default Navigation