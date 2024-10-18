import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Screen01'; // Đường dẫn tới HomeScreen
import Screen02 from './components/Screen02'; // Đường dẫn tới HomeScreen
import Screen03 from './components/Screen03'; // Đường dẫn tới HomeScreen


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01">
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Screen02" component={Screen02}/>
        <Stack.Screen name="Screen03" component={Screen03}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}