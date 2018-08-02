import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Platform } from 'react-native';

import style from '../../styles/global';

const STATUS_BAR_HEIGHT = 20;

export default class Information extends Component {

  goToSearch = () => {
    alert(111)
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar />
        </View>
        <View style={styles.searchBar}>
          <Image source={require('../../images/logo.png')} style={styles.logo} />
          <View style={styles.input} onPress={() => {

            alert(111)
          }}>
            <Image style={styles.searchIcon} source={require('../../images/search.png')} />
            <Text style={{ fontSize: style.font_7, color: style.color_4 }}>大家都在搜：多地暴雨洪水进屋</Text>
          </View>
          <Image style={styles.qrcode} source={require('../../images/qrcode.png')} />
        </View>
        <Text>1323</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column'
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
  },
  searchBar: {
    height: 44,
    // flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  logo: {
    width: 28,
    height: 28,
  },
  input: {
    width: 283,
    height: 28,
    backgroundColor: style.color_6,
    borderRadius: style.b_1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  searchIcon: {
    marginHorizontal: 8,
  },
  qrcode: {
    width: 28,
    height: 28,
  }
});
