import React, { useState, useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase'
import { Button } from 'react-native-elements';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import LoadingModal from '../components/LoadingModal'


const busDetailsScreen = (props) => {
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                return false
            }
            return () => {
                BackHandler.addEventListener('hardwareBackPress', onBackPress);
            }
        })
    )
    const navigation = useNavigation();
    const { userId } = props.route.params;
    const [isBooked, setBooked] = useState(false)
    const [loading, setLoading] = useState(true)
    const [Seat, setSeat] = useState(0)
    const user = firebase.auth().currentUser
    const mybookings = firebase.database().ref(`users/${user.uid}/mybookings/`)
    const ridesbooked = firebase.database().ref(`ridesbooked/${userId.id}/${user.uid}`)
    const rides = firebase.database().ref(`rides/${userId.id}/`)
    const seatCounter = (obj) => {
        let s = 1
        while (s <= 100) {
            if (obj.includes(s)) {
                s = s + 1
            }
            else {
                break
            }
        }
        return s
    }
    const seatFinder = async () => {
        let obj = []
        let s = 1
        let seatRef = firebase.database().ref(`ridesbooked/${userId.id}/`)
        seatRef.on('value', snapshot => {
            s = 1
            obj = []
            snapshot.forEach(childshot => {
                obj.push(childshot.val().seatNo)
            })
            s = seatCounter(obj)
            setSeat(s)
        })
        seatRef.on('child_changed', snapshot => {
            //console.log(snapshot.val())
        })
        seatRef.on('child_added', snapshot => {
            //console.log(snapshot.val())
        })
    }
    useEffect(() => {
        mybookings.on('value', snapshot => {
            setBooked(snapshot.child(userId.id).exists())
            setLoading(false)
        })
        seatFinder()
        
    }, [])
    //console.log(Seat)
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <LoadingModal visible={loading} text='Please wait' />
            <View style={{ alignItems: 'center' }}>
                <View>
                    <Text style={{ fontSize: 30 }}>
                        Bus Details
                    </Text>
                </View>
                <View>
                    <Text>
                        Seats Remaining {userId.seatsRemaining}
                    </Text>
                </View>
            </View>
            <View style={{margin:10, paddingLeft: 10, flexDirection: 'row', marginTop: 30, backgroundColor: '#aafaa0', borderRadius: 10 }}>
                
                <MaterialIcons name="location-on"
                    size={25}
                />
                <Text style={{ fontSize: 20 }}>
                    Pickup Location:
                    </Text>
                <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                    {userId.startLocation}
                </Text>
               
            </View>

            <View style={{margin:10, paddingLeft: 10, flexDirection: 'row', marginTop: 30, backgroundColor: '#aafaa0', borderRadius: 10 }}>
                <MaterialIcons name="my-location"
                    size={25}
                />
                <Text style={{ fontSize: 20 }}>
                    Drop Location:
                    </Text>
                <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                    {userId.dropLocation}
                </Text>
            </View>

            <View style={{margin:10, paddingLeft: 10, flexDirection: 'row', marginTop: 30, backgroundColor: '#aafaa0', borderRadius: 10 }}>
                <MaterialIcons name="access-time"
                    size={25}
                />
                <Text style={{ fontSize: 20 }}>
                    Pick up Time :
                    </Text>
                <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                    {userId.pickUptime}
                </Text>
            </View>

            <View style={{margin:10, paddingLeft: 10, flexDirection: 'row', marginTop: 30, backgroundColor: '#aafaa0', borderRadius: 10 }}>
                <MaterialIcons name="airline-seat-recline-extra"
                    size={25}
                />
                <Text style={{ fontSize: 20 }}>
                    Seat No : {Seat!==0?Seat:null}
                </Text>
            </View>
            <View style={{margin:10, paddingLeft: 10, flexDirection: 'row', marginTop: 30, backgroundColor: '#aafaa0', borderRadius: 10 }}>
                <FontAwesome name="money"
                    size={25}
                />
                <Text style={{ fontSize: 20, paddingLeft: 10 }}>
                    Fare : {userId.fare}
                </Text>
            </View>
            <View style={{ marginTop: 20 }}>
                {
                    !isBooked ?
                        <Button
                            onPress={() => {
                                setLoading(true)
                                rides.update({
                                    seatsRemaining: userId.seatsRemaining - 1
                                })
                                .then(() => {
                                    ridesbooked.set({
                                        seatNo: Seat
                                    }).then(() => {
                                        mybookings.child(userId.id).set({
                                            ...userId,
                                            seatsRemaining: null,
                                            seatNo: Seat
                                        })
                                        .then(() => {
                                                firebase.database().ref(`users/${user.uid}/mybookings/${userId.id}`)
                                                    .once('value')
                                                    .then((snapshot) => {
                                                        navigation.navigate('bookingDetails', { Data: { ...snapshot.val(), uid: user.uid } })
                                                    })
                                                    .catch(e => console.log(e))
                                            }).catch(er => console.log(er))
                                    }).catch(err => console.log(err))
                                })
                            }}
                            title="Book Now"
                        />
                        :
                        <Text>You have already booked this ride.</Text>
                }
            </View>
        </View>
    );
}

export default busDetailsScreen;