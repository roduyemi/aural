/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';
//  import Colors from './Colors';
import {Text, StyleSheet, ImageBackground} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import backgroundImg from './rune-fisker.jpg';

const Header = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={backgroundImg}
    style={styles.background}
    imageStyle={styles.logo}>
    {/* <Text style={styles.text}>Aural</Text> */}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 80,
    paddingTop: 150,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.8,
    overflow: 'visible',
    resizeMode: 'cover',
    // marginLeft: -128,
    marginBottom: -100,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default Header;
