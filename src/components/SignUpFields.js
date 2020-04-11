import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const SignUpFields = () => {
    const navigation = useNavigation();
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
                />
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

            <View>
                <Input 
                placeholder="Retype-Password"
                />
            </View>

            <View style={{ marginTop: '5%'}}>
                <Button 
                title="Create Account"
                />
            </View>

              <View  style={{ flexDirection: 'row', marginHorizontal: '15%'}}>
                <Text> 
                    Already Have Account ? 
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <View>
                    <Text style={{ color: 'blue'}}>
                          LogIn
                    </Text>
                </View>
               </TouchableOpacity>

            </View>          
        </View>
    );
}

export default SignUpFields;