import React, { Component } from 'react';

import { View,Text } from 'react-native';
import { Icon } from "native-base";

export default class ProfileScreen extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-contact" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View>
                <Text>ProfileScreen</Text>
            </View>
        )
    }
}