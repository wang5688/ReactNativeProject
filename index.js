/** @format */

import {AppRegistry} from 'react-native';
import Setup from './app/Pages/Home/Setup'; // 页面入口文件
import {name as appName} from './app.json';
import Test from './demo/App5';

AppRegistry.registerComponent(appName, () => Test);
