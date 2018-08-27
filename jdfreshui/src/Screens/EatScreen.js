import React, { Component } from 'react';

import { View,Text } from 'react-native';
import { Icon } from "native-base";

export default class EatScreen extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-beer" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View>
                <Text>EatScreen</Text>
            </View>
        )
    }
}