import React, { Component } from 'react';
import { View, Text, NavigatorIOS, TouchableHeightlight, Button } from 'react-native';

export default class NavigatorIOSApp extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene'
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

class MyScene extends Component {
  constructor(props, context) {
    super(props, context);
  }

  _onForward = () => {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene' + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        ></Button>
      </View>
    );
  }
}
