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
                    style={{ height: 150, width: 150, borderRadius: 75, marginTop: '20%'  }}
                        source={{ uri: 'data:image/png;base64,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'}}
                    />
                
                <SignUpFields loading={setLoading}/>
                </View>
            </ScrollView>
           
           
     
       
    );

}

const styles = StyleSheet.create({
    container: {
        
     
        alignItems: 'center',
        backgroundColor: '#d6ffff',
        height: '100%',
        paddingBottom: 10,
        width: Dimensions.get('window').width,
    }
  })

export default signUpScreen;