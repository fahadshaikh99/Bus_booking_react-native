import 'react-native-gesture-handler';
import React from 'react';
import signUpScreen from './src/Screens/signUpScreen';
import signInScreen from './src/Screens/signInScreen';
import routesScreen from './src/Screens/routesScreen';
import busDetailsScreen from './src/Screens/busDetailsScreen';
import bookingScreen from './src/Screens/bookingScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SupportScreen from './src/Screens/SupportScreen';
import MyBookingScreen from './src/Screens/MyBookingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent } from './src/components/DrawerContent';


const Drawer = createDrawerNavigator();

function DrawerComp () {
  return(
  
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="HomeDrawer" component={routesScreen} />
       
      </Drawer.Navigator>

  );
}


const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component= {signInScreen} 
       
        />
        <Stack.Screen name="SignUp" component={signUpScreen} />
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


// const signInScreen = ({navigation}) => (
//   <Stack.Navigator screenOptions={{
//           headerStyle: {
//           backgroundColor: '#009387',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//           fontWeight: 'bold'
//           }
//       }}>
//           <Stack.Screen name="Home" component={HomeScreen} options={{
//           title:'Overview',
//           headerLeft: () => (
//               <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//           )
//           }} />
//   </Stack.Navigator>
//   );