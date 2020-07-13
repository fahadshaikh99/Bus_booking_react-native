import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { AntDesign, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons'; 

const LoginFields = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        
        <View style={{marginTop: '15%',  marginHorizontal: '5%', borderRadius: 10, width: '90%', backgroundColor: '#ceadff', alignItems: 'center', padding: 10}}>
            <View style={{ marginTop: '6%', alignItems: 'center'}}>
                <Text style={{ fontSize: 20, fontWeight: "bold"}}>
                        Log In
                </Text> 
            </View> 
            <View style={styles.backgroundStyle}>
                <Input 
                style={styles.InputTextStyle}
                leftIcon={  <MaterialCommunityIcons name="email-outline" size={24} color="black" /> }
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCorrect={false}
                autoCapitalize='none'
                />
            </View>

            <View style={styles.backgroundStyle}>
                <Input 
                style={styles.InputTextStyle}
                leftIcon={  <Feather name="lock" size={24} color="black" /> }
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
            </View>  

            <View style={{ marginTop: '5%', width: '100%'}}>
                <Button 
                onPress={() => {
                    props.loading(true)
                    firebase.auth().signInWithEmailAndPassword(email,password)
                    .then((user) => navigation.navigate('LoadingScreen'))
                    .catch(err => {
                        props.loading(false)
                        Alert.alert(String(err))
                    })
                    
                }}
                title="Log in"
                />
            </View>

              <View  style={{ flexDirection: 'row',marginTop: '7%', marginHorizontal: '15%', paddingVertical: 5}}>
                <Text> 
                    Don't have an account ? 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}> 
                <View>
                    <Text style={{ color: 'blue'}}>
                          Sign Up
                    </Text>
                </View>
               </TouchableOpacity>

            </View>          
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 20,
        width: '100%',
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 13
    },
    InputTextStyle: {
        fontSize: 20,
        flex: 1
    },
  
});

export default LoginFields;