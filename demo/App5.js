import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
// createStackNavigator - 顶部navigation
// TabNavigator - 底部tab (已弃用，使用createBottomTabNavigator)
// createSwitchNavigator - 一次只显示一个屏幕，不处理回退操作(不能回退)，并在切换时将路由重置为默认（一般用于登录流程等）
// createDrawerNavigator - 侧边滑栏
// import Channel from './app/channel';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          // this.props.navigation.push('Mine', {
          //   data: '23131'
          // })
          this.props.navigation.navigate('Mine')
        }}>this is home page</Text>
      </View>
    );
  }
}

class Mine extends Component {
  static navigationOptions = {
    title: 'Mine',
    headerTintColor: 'blue',
    // headerLeft: <Text>1111</Text>,
    headerRight: <Text>分享</Text>,
    headerBackTitle: '222',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          console.log(this.props.navigation)
          this.props.navigation.goBack();
        }}>this is mine page</Text>
      </View>
    );
  }
}

// const Navigation = createSwitchNavigator(
//   {
//     Home,
//     Mine,
//   },
//   {
//     initialRoute: 'Home',
//     initialRouteParams: {
//       abc: 1233,
//     },
//     mode: 'modal'
//   },
// );

// const Navigation = createStackNavigator(
//   {
//     Home,
//     Mine,
//   },
//   {
//     initialRouteName: 'Home',
//     initialRouteParams: {
//       abc: 1
//     },
//     navigationOptions: {
//       headerTintColor: 'red',
//       headerBackTitle: '返回',
//     },
//     // mode: 'modal',
//     headerMode: 'screen'
//   }
// );
//
const Navigation = createBottomTabNavigator(
  {
    Home,
    Mine,
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Mine'],
    tabBarOptions: {
      activeTintColor: 'red', // 选中tab标签和图标颜色
      activeBackgroundColor: 'gray', // 选中背景颜色
      inactiveTintColor: '#000', // 未选中tab标签和图标颜色
      inactiveBackgroundColor: '#000', // 未选中背景颜色
      showLabel: true, // 是否显示标签
      style: {}, // 标签样式
      tabStyle: {}, // 选项卡样式
    }
  }
);

export default class App extends Component {

  render() {

    return (
      <Navigation />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 80,

  }
});
