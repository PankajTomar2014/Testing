import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TestApp from './Src/Screens/App';
import { BottomTabNavigation, StackNavigation } from './Src/Navigation/Naviagtor';
import { NavigationContainer } from '@react-navigation/native';

export default App  = ( ) =>{
  return(
    <NavigationContainer>
        <StackNavigation/>
    </NavigationContainer>
  )
}
