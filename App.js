import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import InforScreen from './InforScreen'
import JobScreen from './JobScreen'
const Stack = createStackNavigator();
const MyContext = createContext();
const App = () => {
  const value = {name:'Nhu Tam', age: 21}
  return (
    <NavigationContainer>
      
    <MyContext.Provider value={value}>
      <Stack.Navigator
        screenOptions={{ 
        headerShown: false, 
                }}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="InforScreen" component={InforScreen} />
        <Stack.Screen name="JobScreen" component={JobScreen} />
      </Stack.Navigator>
    </MyContext.Provider>
    </NavigationContainer>
    
)}
export default App;

