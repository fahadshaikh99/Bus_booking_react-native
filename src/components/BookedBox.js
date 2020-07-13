import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import firebase from 'firebase'

const BookedBox = (props) => {
    const { navigation, loading } = props
    const rides = firebase.database().ref(`rides/${props.id}/`)
    return (
        <View style={{ backgroundColor: 'skyblue', padding: 10 }}>
            <View style={{ padding:10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                <View>
                    <View>
                        <Text>
                            Booking Details
                        </Text>
                    </View>

                    <View>
                        <Text>
                            {props.date} @ {props.pickUptime} 
                            
                        </Text>
                    </View>
                   
                    <View>
                        <Text>
                            {props.startLocation}
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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ marginRight: 15}}>
                    <Button
                        title="CANCEL BOOKING"
                        // call a function in firebase which will delete my booking object
                        onPress={() => {
                            loading(true)
                            rides.once('value')
                                .then(snapshot => {
                                    rides.update({
                                        seatsRemaining: snapshot.val().seatsRemaining + 1
                                    })
                                })
                                .then(() => {
                                    firebase.database().ref(`ridesbooked/${props.id}/${props.uid}`).remove()
                                        .then(() => {
                                            firebase.database().ref(`users/${props.uid}/mybookings/${props.id}`).remove()
                                                .then(() => navigation.goBack())
                                                .catch(e => console.log(e))
                                        })
                                        .catch(err => console.log(err))
                                })
                        }}
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