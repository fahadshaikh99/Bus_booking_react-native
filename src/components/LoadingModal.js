import React from 'react'
import {ActivityIndicator, Text} from 'react-native'
import { Overlay } from 'react-native-elements'


const LoadingModal = ({visible, text}) => {
    return(
        <Overlay isVisible={visible} overlayStyle={{margin: 5,padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <ActivityIndicator size={'large'}/>
                <Text style={{margin: 10}}>{text}</Text>
            </Overlay>
    );
}

export default LoadingModal