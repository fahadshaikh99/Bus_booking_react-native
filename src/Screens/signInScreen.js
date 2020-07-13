import React, { useState } from 'react'
import { ScrollView, View, Text, Dimensions, StyleSheet, Image, ActivityIndicator, BackHandler } from 'react-native';
import LoginFields from '../components/LoginFields';
import LoadingModal from '../components/LoadingModal'
import { useFocusEffect } from '@react-navigation/native'


const signInScreen = () => {
    const [isLoading, setLoading] = useState(false)
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                return true
            }
            return () => {
                BackHandler.addEventListener('hardwareBackPress', onBackPress);
            }
        })
    )
    return (
        <ScrollView>
            <View style={styles.container}>
                <LoadingModal visible={isLoading} text='Signing in'/>

                <Image
                    style={{ height: 150, width: 150, borderRadius: 75, marginTop: '20%' }}
                    source={{ uri: 'https://www.graphicsprings.com/filestorage/stencils/f794ad52bccba5259868672d8db49de5.png?width=500&height=500'}}
                />

                <LoginFields loading={setLoading}/>

            </View>
        </ScrollView>




    );

}

const styles = StyleSheet.create({
    container: {

      
    
        alignItems: 'center',
        borderRadius: 10,
        height: '100%',
        width: Dimensions.get('window').width,
    }
})

export default signInScreen;