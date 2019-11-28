import React, { PureComponent } from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import {StatusBar, View, Platform} from "react-native";
 
import Home from './pages/Home/Home'
import Artilce from './pages/Article/Artilce'
import Top from './pages/Article/Top'
import Detail from './pages/Article/Detail'
 
// const AuthStack = createStackNavigator(
//   {
//     Register: Register,
//     Establish: Establish,
//     Restore: Restore
//   },
// );

// const ListDetailNavigator = createStackNavigator(
//   {
//     Artilce: { screen: Artilce },
//     Detail: { screen: Detail },
//   }
// );



const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
         screen: Top ,
         navigationOptions:{
            tabBarLabel: 'ARTICLE',
         }
        },
    Artilce: { 
        screen: Top ,
        navigationOptions:{
            tabBarLabel: 'HOME',
         }
    },
    Favor: { 
      screen: Artilce ,
      navigationOptions:{
          tabBarLabel: 'FAVOR',
       }
   }, 
    Settings: { 
      screen: Artilce ,
      navigationOptions:{
          tabBarLabel: 'SETTINGS',
       }
  },
    // Order: { screen: Order },
    // Get: { screen: Get }
  }
);

// //设置头部导航
// const AppMaterialTopTabNavigator = createMaterialTopTabNavigator({
//   Page1: {
//       screen: Artilce,
//       navigationOptions: {
//           tabBarLabel: 'All'
//       }
//   },
//   Page2: {
//       screen: Artilce,
//       navigationOptions: {
//           tabBarLabel: 'IOS'
//       }
//   },
//   Page3: {
//       screen: Artilce,
//       navigationOptions: {
//           tabBarLabel: 'React'
//       }
//   },
// }, {
//   tabBarOptions: {
//       tabStyle: {
//           // mindWidth: 50,
//       },
//       upperCaseLabel: false,//是否使标签大写，默认true
//       scrollEnabled: true,//是否支持选项卡滑动，默认false
//       style: {
//           backgroundColor: '#678' //tabBar 背景色
//       },
//       indicatorStyle: {
//           height: 2,
//           backgroundColor: 'white'
//       },//标签指示器的样式
//       labelStyle: {
//           fontSize: 13,
//           marginTop: 6,
//           marginBottom: 6
//       }//文字的样式
//   }
// });

// const AppMaterialTopTabNavigatorContainer = createAppContainer(AppMaterialTopTabNavigator);

// const AppNavigation = createSwitchNavigator(
//   {
//     App: HomeNavigator,
//     Auth: AuthStack,
//     AuthLoading: AuthLoadingScreen
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// );
 
// const App = Home;
const App = createAppContainer(HomeNavigator);
export default App