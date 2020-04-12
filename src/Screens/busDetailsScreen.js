import React from 'react';
import { View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const busDetailsScreen = (props) => {
    const navigation = useNavigation();
    const { userId } = props.route.params;
    console.log(userId.pickUptime);
    
    return(
        <View style={{ flex: 1}}>
            <View style={{  alignItems: 'center'}}>
                <View>
                    <Text style={{ fontSize: 30}}>
                         Bus Details
                    </Text>
                </View> 
                <View>   
                    <Text>
                        Seats Remaining {userId.seatsRemaining}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30}}>
                    <Icon name="location"
                    size={30} 
                    />
                    <Text style={{ fontSize: 20}}>
                        Pickup Location:  
                    </Text>
                    <Text style={{ fontSize: 20}}>
                        {userId.startLocation}
                    </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30}}>
                    <Icon name="location"
                            size={30} 
                            />
                    <Text style={{ fontSize: 20}}>
                            Drop Location:  
                    </Text>
                    <Text style={{ fontSize: 20}}>
                        {userId.dropLocation}
                    </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30}}>
                    <Icon name="location"
                    size={30} 
                    />
                    <Text style={{ fontSize: 20}}>
                        Pick up Time :   
                    </Text>
                    <Text style={{ fontSize: 20}}>
                    {userId.pickUptime}
                    </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30}}>
                     <Icon name="location"
                    size={30} 
                    />
                    <Text style={{ fontSize: 20}}>
                        Seat No : {userId.seatNo} 
                    </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30}}>
                     <Icon name="location"
                    size={30} 
                    />
                    <Text style={{ fontSize: 20}}>
                        Fare : {userId.fare} 
                    </Text>
            </View>
            <View style={{ marginTop: 20}}>
                    <Button
                    onPress={() => navigation.navigate('bookingDetails', { Data: userId})}
                    title="Book Now"
                    />
            </View>
        </View>
    );
}

export default busDetailsScreen;