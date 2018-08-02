import React, { Component } from 'react';
import { Image, View, StyleSheet, Input, Text } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const TabItem = TabNavigator.Item;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  selectTab = (page) => {
    this.setState({
      selectedTab: page
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <TabNavigator

      >
        <TabItem
          selected={selectedTab === 'home'}
          title="资讯"
          selectedTitleStyle={{ color: '#FF3644' }}
          renderIcon={() => <Image style={styles.icon} source={require('./res/images/tabs/information.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/tabs/information_pressed.png')} />}
          onPress={() => { this.selectTab('home'); }}
          badgeText="1"
        >
          {/**<View style={styles.pages1}>
            <View style={styles.search}>
              <Image style={styles.logo} source={require('./res/images/logo.png')} />
              <View style={styles.input}>
                <Image style={styles.searchIcon} source={require('./res/images/search.png')} />
                <Text style={styles.text}>大家都在搜：多地暴雨洪水进屋</Text>
              </View>
              <Image style={styles.qrcode} source={require('./res/images/qrcode.png')} />
            </View>

          </View>
          **/}
          <View>
            <Text>sdda</Text>
          </View>
        </TabItem>
        <TabItem
          selected={selectedTab === 'govern'}
          title="政务"
          selectedTitleStyle={{ color: '#FF3644' }}
          renderIcon={() => <Image style={styles.icon} source={require('./res/images/tabs/govern.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/tabs/govern_pressed.png')} />}
          onPress={() => { this.selectTab('govern'); }}
        >
          <View style={styles.pages1}>
            <Text>这是政务页</Text>
          </View>
        </TabItem>
        <TabItem
          selected={selectedTab === 'mine'}
          title="我的"
          selectedTitleStyle={{ color: '#FF3644' }}
          renderIcon={() => <Image style={styles.icon} source={require('./res/images/tabs/mine.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/tabs/mine_pressed.png')} />}
          onPress={() => { this.selectTab('mine'); }}
        >
          <View style={styles.pages1}>
            <Text>这是我的页</Text>
          </View>
        </TabItem>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row'
  },
  logo: {
    width: 28,
    height: 28,
  },
  input: {
    width: 283,
    height: 28,
    backgroundColor: '#eee',
    borderRadius: 2,
    paddingHorizontal: 8, // 水平方向padding
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .4)'
  },
  qrcode: {
    width: 28,
    height: 28,
  },
  searchIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  pages1: {


  }
});
