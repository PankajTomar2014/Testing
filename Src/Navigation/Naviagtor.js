import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../Screens/Details';
import Home from '../Screens/Home';
import App from '../Screens/App';
import Setting from '../Screens/Setting';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigation = () => {
  return (    
      <Stack.Navigator 
      screenOptions={{ headerShown: true }}
      initialRouteName="App">
        <Stack.Screen name="App" component={App} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>    
    
  );
};

export const BottomTabNavigation = () => {
    return (
          <Tab.Navigator initialRouteName="App">
            <Stack.Screen name="App" component={App} />
            <Tab.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Tab.Screen name="Setting" component={Setting} />
          </Tab.Navigator>      
    );
  };