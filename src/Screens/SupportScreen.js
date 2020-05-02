import React from 'react';
import { View, Text} from 'react-native';

const SupportScreen = () => {
    // add nothing in this file
        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '7%'}}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold'}}>
                        Bus Booker
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '19%'}}>
                    <Text style={{ fontSize: 20}}>
                        for any query feel free to contact
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '11%'}}>
                    <Text style={{ fontSize: 20}}>
                       Contact # 923101224061 
                    </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '11%'}}>
                    <Text style={{ fontSize: 20}}>
                       Or Email us: fahad@fahad.com
                    </Text>
                </View>
            </View>
        );
    
}

export default SupportScreen;