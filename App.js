import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

import StackNavigation from './app/layouts/StackNavigator'

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
}