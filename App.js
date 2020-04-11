import 'react-native-gesture-handler';
import React from 'react';
import signUpScreen from './src/Screens/signUpScreen';
import signInScreen from './src/Screens/signInScreen';
import routesScreen from './src/Screens/routesScreen';
import busDetailsScreen from './src/Screens/busDetailsScreen';
import bookingScreen from './src/Screens/bookingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={signInScreen} />
        <Stack.Screen name="SignUp" component={signUpScreen} />
        <Stack.Screen name="Route" component={routesScreen} />
        <Stack.Screen name="BusDetails" component={busDetailsScreen} />
        <Stack.Screen name="bookingDetails" component={bookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;