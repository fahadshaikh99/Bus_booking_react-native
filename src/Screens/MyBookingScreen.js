import React from 'react';
import { View, Text} from 'react-native';

const MyBookingScreen = () => {
    return(

        // just add user booked data into this component. Note: user can only book one booking at a time
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '11%'}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>
                My Booking
            </Text>
            <View style={{width: '80%', backgroundColor: 'skyblue', borderRadius: 20, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text>
                    Karachi to lahore
                </Text>
                <Text>
                    Bus # 123
                </Text>
                <Text>
                    Date: 4/mar/2020
                </Text>
                <Text>
                    Time: 5p.m
                </Text>
                <Text>
                    Karachi to lahore
                </Text>
            </View>
        </View>
        
    );
}

export default MyBookingScreen;