import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, BackHandler } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import firebase from 'firebase'


const MyBookingScreen = () => {
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                return false
            }
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
            }
        })
    )
    const [DATA, setData] = useState([])
    const user = firebase.auth().currentUser
    let dat = []
    const navigation = useNavigation()
    useEffect(() => {
        firebase.database().ref(`users/${user.uid}/mybookings/`).on('value', snapshot => {
            snapshot.forEach(childshot => {
                dat.push(childshot.val())
            })
            setData(dat)
            dat = []
        })
        firebase.database().ref(`users/${user.uid}/mybookings/`).on('child_removed', snapshot => {
            let dat2 = []
            
            //setData(dat2)
        })
        
    }, [])
    return (
        // just add user booked data into this component. Note: user can only book one booking at a time
        <View style={{ marginTop: '11%', flex: 1 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>
                My Booking
            </Text>
            {
                DATA.length !== 0 ?
                    <FlatList
                        style={{flex: 1}}
                        data={DATA}
                        renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('bookingDetails',{ Data: {...item, uid: user.uid}})}
                                    style={{ backgroundColor: 'skyblue', borderRadius: 20, padding: 10, justifyContent: 'center', alignItems: 'center', margin: 10 }}
                                >
                                    <Text>
                                        {item.startLocation} to {item.dropLocation}
                                    </Text>
                                    <Text>
                                        Bus # {item.busNo}
                                    </Text>
                                    <Text>
                                        Date: {item.date}
                                    </Text>
                                    <Text>
                                        Time: {item.pickUptime}
                                    </Text>
                                </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                    : null
            }



        </View>

    );
}

export default MyBookingScreen;