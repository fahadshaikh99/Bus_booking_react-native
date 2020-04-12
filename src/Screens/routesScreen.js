import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RoutesBoxs from '../components/RoutesBoxs';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';



const DATA = [
    { id: 1, busNo: 'ABC: 123', startLocation: 'Karachi', dropLocation: 'Lahore', seatsRemaining: 20, pickUptime: '5 P.M', dropTime: '3 A.M', date:'5/Jun/2020', fare: 2000, seatNo: 12, MBnumber: '03101224061' },
    { id: 2, busNo: 'DEF: 456', startLocation: 'Hyderabad', dropLocation: 'Islamabad', seatsRemaining: 39, pickUptime: '3 P.M', dropTime: '9 P.M', date:'6/Jun/2020', fare: 5000, seatNo: 19, MBnumber: '03101224061' },
    { id: 3, busNo: 'GHI: 789', startLocation: 'Lahore', dropLocation: 'Peshawar', seatsRemaining: 8, pickUptime: '1 P.M', dropTime: '1 P.M', date:'9/Jun/2020', fare: 3500, seatNo: 26, MBnumber: '03101224061' },
    { id: 4, busNo: 'JKL: 351', startLocation: 'Larkana', dropLocation: 'Multan', seatsRemaining: 2, pickUptime: '5 P.M', dropTime: '11 A.M', date:'11/Jun/2020', fare: 4000, seatNo: 31, MBnumber: '03101224061'},
    { id: 5, busNo: 'MNO: 920', startLocation: 'Karachi', dropLocation: 'Quetta', seatsRemaining: 13, pickUptime: '12 A.M', dropTime: '3 P.M', date:'15/Jun/2020', fare: 5000, seatNo: 5, MBnumber: '03101224061' }
  ];


const routesScreen = ({ navigation }) => {
    const Navigation = useNavigation();
    return(
      
        <View>
            <Appbar.Header>
               
                 <Appbar.Action   icon="border-left"  onPress={() => navigation.openDrawer()} />
                 
                 <Appbar.Content
                 
                    title="Select Routes"
                    
                    />
                
            </Appbar.Header>
        
          
            <FlatList 
               
                data={DATA}
                keyExtractor={(item, index) => index.toString()}
               
                renderItem={({item, index}) => (
            <View>
                
                <TouchableOpacity onPress={() => Navigation.navigate('BusDetails', { userId: item })}>
                  
                        <RoutesBoxs 
                            startLocation = {item.startLocation}
                            dropLocation = {item.dropLocation}
                            seatsRemaining = {item.seatsRemaining}
                            pickUptime = {item.pickUptime}
                            dropTime = {item.dropTime}
                            
                        />
                </TouchableOpacity>
                </View>
                 
                )}
                 />
            
           

            
        </View>

        
    );



  
}
 


export default routesScreen;