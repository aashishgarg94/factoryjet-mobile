import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../pages/HomeScreen'
import OffersScreen from '../pages/OffersScreen'
import CartScreen from '../pages/CartScreen'
import ProductPage from '../pages/ProductPage'
import ArrivalsScreen from '../pages/ArrivalsScreen'
import CategoryScreen from '../pages/CategoryScreen'
import BrandsScreen from '../pages/BrandsScreen'
import CategoryPage from '../pages/CategoryPage'
import BrandPage from '../pages/BrandPage'
import BestsellersScreen from '../pages/BestsellersScreen'
import OrdersScreen from '../pages/OrdersScreen'
import CustomerSupportScreen from '../pages/CustomerSupportScreen'
import AddressScreen from '../pages/AddressScreen'

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="CategoryPage" component={CategoryPage} />
    </Stack.Navigator>
  );
}

function CategoryStack() {
  return (
    <Stack.Navigator initialRouteName="CategoryScreen" screenOptions={{headerShown: false}}  >
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="CategoryPage" component={CategoryPage} />
    </Stack.Navigator>
  );
}

function BrandsStack() {
  return (
    <Stack.Navigator initialRouteName="BrandsScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="BrandsScreen" component={BrandsScreen}/>
      <Stack.Screen name="BrandPage" component={BrandPage} />
    </Stack.Navigator>
  );
}

function OffersStack() {
  return (
    <Stack.Navigator initialRouteName="OffersScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="OffersScreen" component={OffersScreen}/>
    </Stack.Navigator>
  );
}

function ArrivalsStack() {
  return (
    <Stack.Navigator initialRouteName="ArrivalsScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="ArrivalsScreen" component={ArrivalsScreen}/>
    </Stack.Navigator>
  );
}

function BestsellersStack() {
  return (
    <Stack.Navigator initialRouteName="BestsellersScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="BestsellersScreen" component={BestsellersScreen}/>
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator initialRouteName="CartScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="CartScreen" component={CartScreen}/>
      <Stack.Screen name="ProductPage" component={ProductPage}/>
      <Stack.Screen name="AddressScreen" component={AddressScreen}/>
    </Stack.Navigator>
  );
}

function OrdersStack() {
  return (
    <Stack.Navigator initialRouteName="OrdersScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="OrdersScreen" component={OrdersScreen}/>
    </Stack.Navigator>
  );
}

function CustomerSupportStack() {
  return (
    <Stack.Navigator initialRouteName="CustomerSupportScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="CustomerSupportScreen" component={CustomerSupportScreen}/>
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        name="Logo"
        label="FactoryJet"
        onPress={() => props.navigation.navigate('Home')}
        style={{paddingTop: 5, borderBottomWidth: 1, marginBottom: 5, paddingBottom: 5, borderColor: "#CB8213"}}
        labelStyle={{color: "#905908", fontSize: 20}}
      />
    <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" backBehavior="history" drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#905908",
        inactiveTintColor: "#905908"        
      }}
      >
      <Drawer.Screen name="Home" component={HomeStack} options={{ unmountOnBlur: true }} listeners={{ }}/>
      {/*<Drawer.Screen name="Value Offers" component={OffersStack} options={{ unmountOnBlur: true }}/>*/}
      <Drawer.Screen name="New Arrivals" component={ArrivalsStack} options={{ unmountOnBlur: true }} />
      <Drawer.Screen name="Shop By Category" component={CategoryStack} options={{ unmountOnBlur: true }} />
      <Drawer.Screen name="Shop By Brands" component={BrandsStack} options={{ unmountOnBlur: true }} />
      {/*<Drawer.Screen name="Bestsellers" component={BestsellersStack} options={{ unmountOnBlur: true }} />*/}
      <Drawer.Screen name="My Cart" component={CartStack} options={{ unmountOnBlur: true }} />
      <Drawer.Screen name="My Orders" component={OrdersStack} options={{ unmountOnBlur: true }} />
      <Drawer.Screen name="Customer Support" component={CustomerSupportStack} options={{ unmountOnBlur: true }} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}