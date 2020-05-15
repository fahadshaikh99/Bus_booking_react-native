import React, {useState} from 'react'
import { ScrollView,View, Text, Dimensions, StyleSheet, Image, BackHandler} from 'react-native';
import SignUpFields from '../components/SignUpFields';
import LoadingModal from '../components/LoadingModal'
import { useFocusEffect} from '@react-navigation/native'



const signUpScreen = () => {
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
    return(        
            <ScrollView>
                <View style={styles.container}>
                <LoadingModal visible={isLoading} text='Signing up'/>
                <Image 
                    style={{ height: 150, width: 150, borderRadius: 75, marginTop: '15%'  }}
                        source={{ uri: 'https://www.graphicsprings.com/filestorage/stencils/f794ad52bccba5259868672d8db49de5.png?width=500&height=500'}}
                    />
                
                <SignUpFields loading={setLoading}/>
                </View>
            </ScrollView>
           
           
     
       
    );

}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        height: '100%',
        paddingBottom: 5,
        width: Dimensions.get('window').width,
    }
  })

export default signUpScreen;