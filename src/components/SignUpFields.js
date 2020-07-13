import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import firebase from 'firebase'
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons, Feather, FontAwesome } from '@expo/vector-icons'; 

const SignUpFields = (props) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passcheck, setPasscheck] = useState("")
    const [phone, setPhone] = useState("")
    const [error, setError] = useState(false)
    return(
        <ScrollView style={{flex: 1}}>
        <View style={{flex: 1,paddingBottom: 5, marginTop: '4%', height: '55%', marginHorizontal: '5%', borderRadius: 10, width: '90%', backgroundColor: '#ceadff'}}>
            <View style={{ marginTop: '6%', alignItems: 'center'}}>
                <Text style={{ fontSize: 20}}>
                        SIGN UP
                </Text> 
            </View> 

            <View style={styles.backgroundStyle}>
               
                <Input 
                    leftIcon={  <AntDesign name="user" size={24} color="black" /> }
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    placeholder="Username"
                    value={username}
                    onChangeText={text => setUsername(text)}
                    autoCorrect={false}
                />
            </View>

            <View style={styles.backgroundStyle}>
                <Input 
                    leftIcon={  <MaterialCommunityIcons name="email-outline" size={24} color="black" /> }
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
            </View>

            <View style={styles.backgroundStyle}>
                <Input 
                     leftIcon={  <FontAwesome name="phone" size={24} color="black" /> }
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    placeholder="Phone"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    autoCorrect={false}
                    autoCapitalize='none'
                />
            </View>

            <View style={styles.backgroundStyle}>
                <Input 
                     leftIcon={  <Feather name="lock" size={24} color="black" /> }
                     inputContainerStyle={{ borderBottomWidth: 0 }}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>  

            <View style={styles.backgroundStyle}>
                <Input 
                 leftIcon={  <Feather name="lock" size={24} color="black" /> }
                 inputContainerStyle={{ borderBottomWidth: 0 }}
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
            <View style={{ margin: 10}}>
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

              <View  style={{ flexDirection: 'row', marginHorizontal: '15%'}}>
                <Text> 
                    Already Have Account ? 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <View>
                    <Text style={{ color: 'blue', fontSize: 16, marginLeft: 9}}>
                          LogIn
                    </Text>
                </View>
               </TouchableOpacity>

            </View>          
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 7,
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


export default SignUpFields;