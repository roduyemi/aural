/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName, auralShare} from './app.json';
// import {registerRootComponent} from 'expo';
import TrackPlayer from 'react-native-track-player';
// import TrackPlayer from './TrackPlayer';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(auralShare, () => <div></div>);

// registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => require('./service'));
