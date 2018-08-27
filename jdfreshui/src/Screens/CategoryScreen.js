import React, { Component } from 'react';

import { View,Text } from 'react-native';
import { Icon } from "native-base";

export default class CataGoryScreen extends Component{

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-apps" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
            <View>
                <Text>CataGoryScreen</Text>
            </View>
        )
    }
}