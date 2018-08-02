/**
 * 首页
 * @type {[type]}
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const TabItem = TabNavigator.Item;
import Information from '../Information';

// 定义tab常量
const TAB_BAR = {
  tab_information: 'tab_information',
  tab_govern: 'tab_govern',
  tab_mine: 'tab_mine',
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: TAB_BAR.tab_information,
    };
  }

  _renderItem = (content, name, selected, icon) => {
    if (!name || !content) return;
    return (
      <TabItem
        title={name}
        titleStyle={styles.title}
        selected={this.state.selected === selected}
        renderIcon={() => <Image style={styles.icon} source={icon} />}
        renderSelectedIcon={() => <Image style={styles.icon} source={icon} />}
        selectedTitleStyle={{ color: '#FF3644' }}
        onPress={() => {
          this.setState({
            selected,
          });
        }}
      >
        {content}
      </TabItem>
    );
  }

  render() {
    const { selected } = this.state;

    return (
      <TabNavigator
        tabBarStyle={styles.tab}
        tabBarShadowStyle={styles.tagShadow}
      >
        {this._renderItem(<Information />, '资讯', TAB_BAR.tab_information, require('../../../res/images/tabs/information.png'))}
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'rgba(248, 248, 248, .82)',
    height: 49,
  },
  tabShadow: {

  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    color: 'rgba(0, 0, 0, .8)',
    fontSize: 10,
  }
});
