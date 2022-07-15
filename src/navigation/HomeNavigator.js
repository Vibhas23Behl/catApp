import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const TabNavigation = ({navigation,route}) => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
        }} >
            <Tab.Screen name="Home" component={HomeScreen} initialParams={{ icon: 'home' }} />
            <Tab.Screen name="Cart" component={CartScreen} initialParams={{ icon: 'cart' }} />
     
        </Tab.Navigator>
    )
}


export const DrawerNavigation = () => {
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
}


export default function HomeNavigator() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="HomeTab" component={DrawerNavigation} />

        </HomeStack.Navigator>
    );
}



