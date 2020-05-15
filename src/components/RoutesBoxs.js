import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const RoutesBoxs = (props) => {
 
    return(
    <View style={{ alignItems: 'center'}}>    
             
            <View style={{flexDirection: 'row', width:'90%', borderRadius: 20, marginTop: 20,  backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
               
                <View>
                    <View style={{ marginTop: '5%',  alignItems: 'center'}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
                            {props.startLocation} to {props.dropLocation}
                        </Text>
                    </View>

                    <View style={{  alignItems: 'center' }}>
                        <Text>
                            Seats Remainig {props.seatsRemaining}
                        </Text>
                    </View>

                    <View style={{ marginTop: '5%', marginBottom: '5%', alignItems: 'center'}}>
                        <Text>
                            Time: {props.pickUptime} to {props.dropTime}
                        </Text>
                    </View>

                </View>
        
        </View>
    </View>     
        
    );
}

const styles ={
    BoxStyle: {
        height: 70,
        width: 290,
        borderRadius: 5,
        marginLeft: 20,
        borderRadius: 12
    },
    TextStyle: {
        fontSize: 15,
        color: '#6BACFF',
        fontWeight: 'bold'
    }

};


export default RoutesBoxs;