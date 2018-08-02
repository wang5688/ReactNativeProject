/**
 * 开屏欢迎页面
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, InteractionManager } from 'react-native';
import Home from './Home';

const CUTDOWN_TIME = 0;

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cutDown: 3,
    };
  }

  componentDidMount() {
    const { navigator } = this.props;
    this._cutDown();

    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: Home,
          name: 'Home',
          params: {},
        });
      });
    }, CUTDOWN_TIME);
  }

  _cutDown = () => {
    if (!CUTDOWN_TIME) return;
    let cutDown = CUTDOWN_TIME / 1000;
    this.cutTimer = setInterval(() => {
      cutDown--;
      if (cutDown <= 0) {
        cutDown = 0;
        clearInterval(this.cutTimer);
      }
      this.setState({
        cutDown
      });
    }, 1000);
  }

  render() {
    const { cutDown } = this.state;

    return (
      <View style={styles.container}>
        <Text>Welcome To My App</Text>
        <Text>{`(${cutDown})`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
