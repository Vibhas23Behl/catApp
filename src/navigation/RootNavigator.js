import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeNavigator, {TabNavigation} from './HomeNavigator';
import AuthNavigator from './AuthNavigator';

const RootStack = createNativeStackNavigator();
export default function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <RootStack.Screen
                    name="SplashScreen"
                    component={SplashScreen} />
                <RootStack.Screen
                    name="HomeStack"
                    component={HomeNavigator}
                    options={{ headerLeft: null, gestureEnabled: false }} />
                <RootStack.Screen
                    name="AuthStack"
                    component={AuthNavigator}
                    options={{ headerLeft: null, gestureEnabled: false }} />
            </RootStack.Navigator>
        </NavigationContainer>

    );
}