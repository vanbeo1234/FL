// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import OTPScreen from './OTPScreen';
import SuccessScreen from './SuccessScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ title: 'Đăng nhập' }}
        />
        <Stack.Screen 
          name="OTPScreen" 
          component={OTPScreen} 
          options={{ title: 'Xác minh OTP' }}
        />
        <Stack.Screen 
          name="SuccessScreen" 
          component={SuccessScreen} 
          options={{ title: 'Chúc mừng' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}