import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import RoutesBoxs from '../components/RoutesBoxs';
import { useNavigation } from '@react-navigation/native';

const routesScreen = () => {
    const navigation = useNavigation();
    return(
      
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('BusDetails')}>
                  
                        
                        <RoutesBoxs 
                            startLocation = " Karachi"
                            dropLocation = "Lahore"
                            seatsRemaining = "20"
                            pickUptime = "5 p.m"
                            dropTime = " 9 a.m"
                            
                        />
                        
              
                </TouchableOpacity>
            </View>

            
        </View>

        
    );
}



export default routesScreen;