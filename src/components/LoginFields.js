import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import { Input, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


const LoginFields = () => {
    const navigation = useNavigation();
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
                />
            </View>

            <View>
                <Input 
                placeholder="Password"
                />
            </View>  

            <View style={{ marginTop: '5%'}}>
                <Button 
                onPress={() => navigation.navigate('Route')}
                title="Log in"
                />
            </View>

              <View  style={{ flexDirection: 'row', marginHorizontal: '15%'}}>
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