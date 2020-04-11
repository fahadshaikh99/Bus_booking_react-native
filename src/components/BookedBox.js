import React from 'react';
import { View, Text} from 'react-native';
import {  Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const BookedBox = () => {
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
                            4/mar/2020 @ 11:00
                        </Text>
                    </View>

                    <View>
                        <Text>
                            Karachi
                        </Text>
                        <Text>
                            Lahore
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
                        />
                    </View>
                    <View>
                        <Button 
                        title="CALL"
                        />
                    </View>
            </View>
        </View>
    );
}

export default BookedBox;