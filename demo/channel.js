import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const dimen = Dimensions.get('window');
// 设备宽度
const SCREEN_WIDTH = dimen.width;

const CHANNEL_LIST = [
  {
	"cid": "2da8f707e9d514c562162540d2b0ad57",
	"pid": 1,
	"tag": 1,
	"cname": "推荐",
	"icon": "",
	"fix": "1",
	"url": "",
	"tname": "热点",
	"dislike": 1,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "d7faaf6c50a2a79b38c6e49bf41695b0",
	"pid": 1,
	"tag": 1,
	"cname": "本地",
	"icon": "",
	"fix": "2",
	"url": "",
	"tname": "本地",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "1",
	"style": "local",
	"level": "1"
}, {
	"cid": "dd55def6f6784674d5a5b4cba0029a29",
	"pid": 1,
	"tag": 1,
	"cname": "新时代",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "新时代",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "1",
	"style": "common",
	"level": "1"
}, {
	"cid": "7389193781085e10178780f6bbb3c79e",
	"pid": 1,
	"tag": 1,
	"cname": "新闻",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "新闻",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "3ea38d7ceaf218aee879343ce6d2c826",
	"pid": 1,
	"tag": 1,
	"cname": "视频",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "视频",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "7af450a9dcc60c0af56db7421a461c02",
	"pid": 1,
	"tag": 1,
	"cname": "娱乐",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "娱乐",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "eaabd3750a92632e39431d1197b80acc",
	"pid": 1,
	"tag": 1,
	"cname": "体育",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "体育",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "ccaa7b3dafbdd70a7a0abeb17902e994",
	"pid": 1,
	"tag": 1,
	"cname": "科技",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "科技",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "cde065b013e874b45414c7eb5bb4567e",
	"pid": 1,
	"tag": 1,
	"cname": "军事",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "军事",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "5669459fffd471c7adb81621ccc652f2",
	"pid": 1,
	"tag": 1,
	"cname": "财经",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "财经",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "4e9715a3087a5cf063107c9132be55f5",
	"pid": 1,
	"tag": 1,
	"cname": "生活",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "生活",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "89c77e29681377ac932434f78870b9b0",
	"pid": 1,
	"tag": 1,
	"cname": "BTV",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "BTV",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "24hour",
	"level": "1"
}, {
	"cid": "0cb13d67ec9dcf5c335fc1df70a05877",
	"pid": 1,
	"tag": 1,
	"cname": "国际",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "国际",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "db497643fe8a6c9f0bffd1e53c9cadff",
	"pid": 1,
	"tag": 1,
	"cname": "时间号",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "时间号",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "2",
	"style": "common",
	"level": "1"
}, {
	"cid": "3712972d84adf48acbd6ad24b4d75ad0",
	"pid": 1,
	"tag": 1,
	"cname": "冬奥",
	"icon": "",
	"fix": "0",
	"url": "",
	"tname": "冬奥",
	"dislike": 2,
	"show_live": "0",
	"show_chat": "0",
	"strategy": "1",
	"style": "common",
	"level": "1"
}
];

export default class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '0',
      layoutList: [],
    };
  }

  handleSelect = (e, index) => {
    const scroll = this.refs.scroll;
    if (!scroll) return;
    const layout = this.layoutList[index];
    // let sx = layout.x - SCREEN_WIDTH / 2 - layout.width / 2;
    // console.log(sx)
    // sx < this.scrollW - SCREEN_WIDTH && scroll.scrollTo({ x: sx });
    // sx >= this.scrollW - SCREEN_WIDTH && scroll.scrollToEnd({});
    // this.refs.scroll.scrollTo({
    //   x: 50,
    // })
    this.setState({
      selected: index
    });
  }

  layoutList = [];
  scrollW = 0;

  // item渲染的时候记录各个item的位置
  setLayout = (e, index) => {
    const layoutList = [];
    const layout = e.nativeEvent.layout;
    this.layoutList[index] = layout;
    this.scrollW += layout.width;
  }

  onScroll = () => {
    console.log(111)
  }

  render() {
    const { selected } = this.state;

    return (
      <ScrollView
        ref="scroll"
        horizontal
        directionalLockEnabled //锁定滚动方向
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        onScroll={this.onScroll}
        scrollEventThrottle={16}
      >
        {
          CHANNEL_LIST.map((item, index) =>
            <Text
              key={index}
              onPress={(e) => { this.handleSelect(e, index); }}
              onLayout={(e) => { this.setLayout(e, index); }}
              style={[styles.item, selected == index && styles.selected]}
            >{item.cname}</Text>
          )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, .4)',
    marginHorizontal: 10,
    height: 32,
    lineHeight: 32,
  },
  selected: {
    color: '#FF3644',
    // borderBottomColor: '#FF3644',
    // borderBottomWidth: 3,
  }
});
