import {Text, StyleSheet, ImageBackground} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import backgroundImg from './rune-fisker-the-palace.jpeg';

const Footer = () => (
  <ImageBackground
    accessibilityRole={'image'}
    source={backgroundImg}
    style={styles.background}
    imageStyle={styles.logo}>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 80,
    paddingTop: 150,
    paddingHorizontal: 80,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.8,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -100,
  }
});

export default Footer;
