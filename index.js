/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import {registerRootComponent} from 'expo';
import TrackPlayer from 'react-native-track-player';
// import TrackPlayer from './TrackPlayer';
import App from './App';

AppRegistry.registerComponent(appName, () => App);

// registerRootComponent(App);
TrackPlayer.registerPlaybackService(() => require('./service'));
