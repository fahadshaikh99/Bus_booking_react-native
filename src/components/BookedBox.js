import React from 'react';
import { View, Text, Linking} from 'react-native';
import {  Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const BookedBox = (props) => {
    return(
        <View  style={{ backgroundColor: 'skyblue'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               
                <View>
                    <View>
                        <Text>
                            Booking Details
                        </Text>
                    </View>

                    <View>
                        <Text>
                            {props.date} @ {props.pickUpTime}
                        </Text>
                    </View>

                    <View>
                        <Text>
                            {props. startLocation}
                        </Text>
                        <Text>
                            {props.dropLocation}
                        </Text>
                    </View>
                
                </View>
                <View>
                    <Icon 
                    name="location"
                    size={40}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <View>
                        <Button 
                        title="CANCEL BOOKING"
                        // call a function in firebase which will delete my booking object
                        />
                    </View>
                    <View>
                        <Button 
                        onPress={() => Linking.openURL(`tel: ${props.MBnumber}`)}
                        title="CALL"

                        />
                    </View>
            </View>
        </View>
    );
}

export default BookedBox;