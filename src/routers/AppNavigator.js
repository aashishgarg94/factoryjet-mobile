import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../pages/HomeScreen'
import OffersScreen from '../pages/OffersScreen'
import ArrivalsScreen from '../pages/ArrivalsScreen'
import CategoryScreen from '../pages/CategoryScreen'
import CategoryPage from '../pages/CategoryPage'
import BestsellersScreen from '../pages/BestsellersScreen'
import OrdersScreen from '../pages/OrdersScreen'
import SettingsScreen from '../pages/SettingsScreen'
import CustomerSupportScreen from '../pages/CustomerSupportScreen'

const Stack = createStackNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator initialRouteName="Categories" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Categories" component={CategoryScreen}/>
      <Stack.Screen name="Category" component={CategoryPage} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" backBehavior="history" >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Value Offers" component={OffersScreen} />
      <Drawer.Screen name="New Arrivals" component={ArrivalsScreen} />
      <Drawer.Screen name="Shop By Category" component={CategoryStack} />
      <Drawer.Screen name="Bestsellers" component={BestsellersScreen} />
      <Drawer.Screen name="Your Orders" component={OrdersScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Customer Support" component={CustomerSupportScreen} />
    </Drawer.Navigator>
  );
}