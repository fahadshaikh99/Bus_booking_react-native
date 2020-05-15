import React, {useEffect, useState} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native';


const LoadingScreen = ({navigation}) => {
    const userCheck = async () => {
        await firebase.auth().onAuthStateChanged(user => {
            if(user){
                navigation.navigate('Route')
           }
           else{
               navigation.navigate('Login')
           }
        })
    }
    useEffect(() => {
           userCheck()
    },[])
    return(
        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text>Please Wait</Text>
            <ActivityIndicator size={'large'}/>
        </View>
    );
}

export default LoadingScreen