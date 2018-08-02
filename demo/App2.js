import React, { Component } from 'react';
import { ListView, Text, View, Button, Alert, StyleSheet, ActionSheetIOS, WebView } from 'react-native';
// import WebView from './app/webview';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class MyComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      web_url: null,
    };
  }

  handlePress = () => {
    // ActionSheetIOS.showActionSheetWithOptions({
    //   options: ['取消', '删除'],
    //   destructiveButtonIndex: 1,
    //   cancelButtonIndex: 0,
    // }, (buttonIndex) => {
    //   if (buttonIndex === 1) {
    //     Alert.alert('删除成功');
    //   }
    // });
    // ActionSheetIOS.showShareActionSheetWithOptions({
    //   url: 'https://m.btime.com',
    //   message: '分享到朋友圈',
    //   subject: '分享到朋友圈1111',
    // }, (err) => {
    //   Alert.alert(err);
    // }, () => {
    //
    // });

    this.refs.toast.show('哈哈哈哈')
  }

  render() {

    return (
      <View style={styles.container}>
        <Button
          title="点我一下"
          onPress={this.handlePress}
        />

        <Toast ref="toast" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50
  }
});
