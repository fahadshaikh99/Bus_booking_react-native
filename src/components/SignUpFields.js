import React, {useState} from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase'
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const SignUpFields = (props) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passcheck, setPasscheck] = useState("")
    const [phone, setPhone] = useState("")
    const [error, setError] = useState(false)
    return(
        <View style={{marginTop: '15%', height: '60%', marginHorizontal: '5%', borderRadius: 10, width: '90%', backgroundColor: 'white'}}>
            <View style={{ marginTop: '6%', alignItems: 'center'}}>
                <Text>
                        SIGN UP
                </Text> 
            </View> 

            <View>
                <Input 
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                autoCorrect={false}
                />
            </View>

            <View>
                <Input 
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCorrect={false}
                autoCapitalize='none'
                />
            </View>

            <View>
                <Input 
                placeholder="Phone"
                value={phone}
                onChangeText={text => setPhone(text)}
                autoCorrect={false}
                autoCapitalize='none'
                />
            </View>

            <View>
                <Input 
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                />
            </View>  

            <View>
                <Input 
                placeholder="Retype-Password"
                value={passcheck}
                onChangeText={text => setPasscheck(text)}
                secureTextEntry
                />
            </View>

            {
                error===true?
                <Text style={{color: 'red', alignSelf: 'center'}}>Password does not match</Text>
                :null
            }
            <View style={{ marginTop: '5%'}}>
                <Button 
                title="Create Account"
                onPress={() => {
                    if(password === passcheck){
                        props.loading(true)
                        firebase.auth().createUserWithEmailAndPassword(email,password)
                        .then(() => {
                            firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).set({
                                name: username,
                                pass: password,
                                phoneNo: phone,
                                uname: username,
                            })
                            .then(() => {
                                props.loading(false)
                                navigation.navigate('Route')                                
                            })
                            
                        })
                        .catch(err => console.log(err))
                    }
                    else{
                        setError(true)
                    }
                }}
                />
            </View>

              <View  style={{ flexDirection: 'row', marginHorizontal: '15%', paddingVertical: 10}}>
                <Text> 
                    Already Have Account ? 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <View>
                    <Text style={{ color: 'blue', fontSize: 22}}>
                          LogIn
                    </Text>
                </View>
               </TouchableOpacity>

            </View>          
        </View>
    );
}

export default SignUpFields;