import React from 'react';
import { View, Text} from 'react-native';

const ProfileScreen = () => {

    // show the user name only on this page nothing else
    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '7%'}}>
                <Text style={{ fontSize: 40, fontWeight: 'bold'}}>
                    Bus Booker
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '19%'}}>
                <Text style={{ fontSize: 30, fontWeight: 'bold'}}>
                    Fahad Shaikh
                </Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '11%'}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
                   Contact # 923101224061
                </Text>
            </View>
        </View>
    );
}

export default ProfileScreen;