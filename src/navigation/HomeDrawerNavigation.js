import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductScreen from '../screens/product/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import { BLUE } from '../../utils/commoncolors';
import OrderScreen from '../screens/OrdersScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
const Drawer = createDrawerNavigator();

export default function(){
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerTintColor: 'white',
                headerStyle:{
                    backgroundColor: BLUE,
                }
            }}
            drawerContent={(props) => <CustomDrawerContent {...props}/>}>
            <Drawer.Screen
                name="Product" 
                component={ProductScreen}
            />
            <Drawer.Screen
                name="Order" 
                component={OrderScreen}
            />
            <Drawer.Screen
                name="Notification" 
                component={NotificationScreen}
            />
            <Drawer.Screen
                name="Profile" 
                component={ProfileScreen}
            />
            <Drawer.Screen
                name="Setting" 
                component={SettingScreen}
            />
        </Drawer.Navigator>
    )
}