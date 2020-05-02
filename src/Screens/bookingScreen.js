import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BookedBox from '../components/BookedBox';

const bookingScreen = (props) => {
    const navigation = useNavigation();
    const { Data } = props.route.params;
    console.log(Data);

    //Generate the Random code and upload it to firebase

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
                    Bus # {Data.busNo}
                </Text>
            </View>
            <BookedBox
                date={Data.date}
                pickUpTime={Data.pickUpTime}
                startLocation={Data.startLocation}
                dropLocation={Data.dropLocation}
                MBnumber={Data.MBnumber}
            />
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