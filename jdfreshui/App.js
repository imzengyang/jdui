/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation'
import HomeScreen from './src/Screens/HomeScreen';

import CataGoryScreen from './src/Screens/CategoryScreen';
import EatScreen from './src/Screens/EatScreen';
import RankingScreen from './src/Screens/RankingScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

const RootStack = createBottomTabNavigator({
  "首页":{
    screen:HomeScreen
  },
  "分类":{
    screen:CataGoryScreen
  },
  "甄会吃":{
    screen:EatScreen
  },
  "排行榜":{
    screen:RankingScreen
  },
  "我的":{
    screen:ProfileScreen
  }

},
{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
      labelStyle: {
          fontSize: 12,
      },
      tabStyle: {
          width: 100,
      }
  }
})


export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}
