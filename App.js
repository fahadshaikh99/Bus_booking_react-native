import 'react-native-gesture-handler';
import firebase from 'firebase';
import React from 'react';
import signUpScreen from './src/Screens/signUpScreen';
import signInScreen from './src/Screens/signInScreen';
import routesScreen from './src/Screens/routesScreen';
import busDetailsScreen from './src/Screens/busDetailsScreen';
import bookingScreen from './src/Screens/bookingScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SupportScreen from './src/Screens/SupportScreen';
import LoadingScreen from './src/Screens/LoadingScreen'
import MyBookingScreen from './src/Screens/MyBookingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from './src/components/DrawerContent';
console.disableYellowBox = true;

const Drawer = createDrawerNavigator();

const DrawerComp = (props) => {
    return(  
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} >
        <Drawer.Screen name="HomeDrawer" component={routesScreen} />       
      </Drawer.Navigator>
  );
}


const Stack = createStackNavigator();

const App = ({ navigation }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCOWfPhSkRsdhPL_MgOuqkJal-tcvjDiTE",
    authDomain: "bus-booking-appp.firebaseapp.com",
    databaseURL: "https://bus-booking-appp.firebaseio.com",
    projectId: "bus-booking-appp",
    storageBucket: "bus-booking-appp.appspot.com",
    messagingSenderId: "326894553693",
    appId: "1:326894553693:web:7b1b6eb86d0096a9881bb4"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component= {signInScreen} options={{headerShown: false}}
       
        />
        <Stack.Screen name="SignUp" component={signUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Route" component={DrawerComp} 
         options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="BusDetails" component={busDetailsScreen} />
        <Stack.Screen name="MyBookings" component={MyBookingScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="bookingDetails" component={bookingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
