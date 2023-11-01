import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Landing from '../screens/Landing';


const Tab = createBottomTabNavigator();

const NavigationBar = () => {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Discover') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Stores') {
              iconName = focused ? 'storefront' : 'storefront-outline';
            } else if (route.name === 'Map') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'darkgreen',
          inactiveTintColor: 'lightgreen',
        }}
      >
        <Tab.Screen name="Home" component={Landing} />
        <Tab.Screen name="Discover"  />
        <Tab.Screen name="Stores"  />
        <Tab.Screen name="Map"  />
        <Tab.Screen name="Account"  />
      </Tab.Navigator>
    
  );
}

export default NavigationBar;