import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Mine from './mine'

export default class Home extends Component {

  render() {
    console.log(this.props.navigator)

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="red"
          style={{ height: 20 }}
        />
        <Text>this is home page</Text>


        <Button
          title="点我一下"
          onPress={() => {
            this.props.navigator.push({
              component: Mine,
              title: 'Mine',
              passProps: { index: 1 }
            })
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'pink',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});
