import React, { Component } from 'react';
import { View, NavigatorIOS, Alert, Button, StyleSheet } from 'react-native';
import Home from './app/home';
import Mine from './app/mine';

export default class App extends Component {

  render() {
    console.log(this.props)
    return (
      <NavigatorIOS
        navigationBarHidden={true}
        shadowHidden={true}
        style={{ flex: 1 }}
        interactivePopGestureEnabled={true}
        initialRoute={{
          component: Home,
          title: 'Home',
          leftButtonTitle: "返回",
          onLeftButtonPress: () => {
            alert('111')
          },
          passProps: { index: 1 },
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 80,

  }
});
