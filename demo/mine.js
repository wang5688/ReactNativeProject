import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Mine extends Component {

  render() {
    console.log(this.props, 'mine')
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          this.props.navigator.pop();
        }}>this is mine page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
