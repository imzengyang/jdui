import React, { Component } from 'react';

import { View,Text } from 'react-native';
import {Icon} from 'native-base'

export default class HomeScreen extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" style={{ color: tintColor }} />
        )
    }

    render(){
        return(
            <View>
                
                <Text>HomeScreen</Text>
            </View>
        )
    }
}