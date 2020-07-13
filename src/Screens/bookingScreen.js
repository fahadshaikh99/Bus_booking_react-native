import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BookedBox from '../components/BookedBox';
import LoadingModal from '../components/LoadingModal';

const bookingScreen = (props) => {
    const navigation = useNavigation();
    const [Loading, setLoading] = useState(false)
    const { Data } = props.route.params;
    //Generate the Random code and upload it to firebase
    return (
        <View>
            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <LoadingModal visible={Loading} text='Please wait' />
                <Text style={{ fontSize: 30 }}>
                    Booking Confirmed
            </Text>
            </View>
           
            <View style={{marginBottom: 5, marginTop:10}}>
                <Text style={{fontSize:18}}>
                    Bus # {Data.busNo}
                </Text>
            </View>
            <BookedBox
                loading={setLoading}
                date={Data.date}
                pickUptime={Data.pickUptime}
                startLocation={Data.startLocation}
                dropLocation={Data.dropLocation}
                MBnumber={Data.MBnumber}
                navigation={navigation}
                id={Data.id}
                code={Data.code}
                uid={Data.uid}
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
                    onPress={() => navigation.goBack()}
                    title="FINISH"
                />
            </View>
        </View>
    );
}

export default bookingScreen;

/*database schema
{
    users: {
        slkjflksjf: {
            name: hassan
            email
            username
        }
    }
    rides: {
        kl45j3l4: {
            bus details
            rideBooked: {
            slkjflksjf: {
                code: 334
                Bus #: GHI: 389
                date
                time
                pickup
                drop
                seat no
            }
        }
        }
    }

}*/