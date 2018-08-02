/**
 * 程序入口文件
 * 首先渲染开屏页
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Welcome from './Welcome';

import { Navigator } from 'react-native-deprecated-custom-components';

export default class Setup extends Component {

  _renderScene = (route, navigator) => {
    const Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Welcome',
          component: Welcome,
        }}
        renderScene={this._renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
