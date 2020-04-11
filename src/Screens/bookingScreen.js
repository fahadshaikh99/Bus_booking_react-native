import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BookedBox from '../components/BookedBox';

const bookingScreen = () => {
    const navigation = useNavigation();
    return(
        <View>
            <View style={{ marginTop: 10, alignItems: 'center'}}>
            <Text style={{ fontSize: 30}}>
                Booking Confirmed
            </Text>
            </View>
            <View style={{ marginTop: 20}}>
                <Text>
                    Code: 123345
                </Text>
            </View>
            <View>
                <Text>
                    Bus # bjf: 123
                </Text>
            </View>
            <BookedBox />
            <View>
                <Text>
                    Thank you for booking with us.
                </Text>
            </View>
            <View>
                <Text>
                    if you would like to change destination please cancel and rebook
                </Text>
            </View>
            
            <View>
                <Button 
                onPress={() => navigation.navigate('Route')}
                title = "FINISH"
                />
            </View>
        </View>
    );
}

export default bookingScreen;