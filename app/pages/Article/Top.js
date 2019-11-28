import React, { PureComponent } from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import {StatusBar, View, Platform, SafeAreaView} from "react-native";
 
import Home from '../Home/Home'
import Artilce from './Artilce'
import Detail from './Detail'

export default class Top extends React.Component {
    render() {
      return (
        <SafeAreaView style={{ flex: 1 }}>
        
          <App1 />
        </SafeAreaView>
      )
    }
  }
//   const ListDetailNavigator = createStackNavigator(
//     {
//       Artilce: { screen: Artilce },
//       Detail: { screen: Detail },
//     }
//   );

const ListDetailNavigator = createStackNavigator(
    {
      Artilce: { screen: Artilce },
      Detail: { screen: Detail },
    }
  );
//设置头部导航
const AppMaterialTopTabNavigator = createMaterialTopTabNavigator({
    Page1: {
        screen: Artilce,
        navigationOptions: {
            tabBarLabel: 'All'
        }
    },
    Page2: {
        screen: Artilce,
        navigationOptions: {
            tabBarLabel: 'IOS'
        }
    },
    Page3: {
        screen: Artilce,
        navigationOptions: {
            tabBarLabel: 'React'
        }
    },
  }, {
    tabBarOptions: {
        tabStyle: {
            // mindWidth: 50,
        },
        upperCaseLabel: false,//是否使标签大写，默认true
        scrollEnabled: true,//是否支持选项卡滑动，默认false
        style: {
            backgroundColor: '#678' //tabBar 背景色
        },
        indicatorStyle: {
            height: 2,
            backgroundColor: 'white'
        },//标签指示器的样式
        labelStyle: {
            fontSize: 13,
            marginTop: 6,
            marginBottom: 6
        }//文字的样式
    }
  });

  const App1 = createAppContainer(AppMaterialTopTabNavigator);