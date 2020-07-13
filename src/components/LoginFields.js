import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import { Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase'

const LoginFields = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return(
        
        <View style={{marginTop: '15%', height: '60%', marginHorizontal: '5%', borderRadius: 10, width: '90%', backgroundColor: 'white'}}>
            <View style={{ marginTop: '6%', alignItems: 'center'}}>
                <Text>
                        LogIn
                </Text> 
            </View> 
            <View>
                <Input 
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                autoCorrect={false}
                autoCapitalize='none'
                />
            </View>

            <View>
                <Input 
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
            </View>  

            <View style={{ marginTop: '5%'}}>
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

              <View  style={{ flexDirection: 'row', marginHorizontal: '15%', paddingVertical: 5}}>
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

export default LoginFields;