import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import Footer from '../../footer';

const LandingScreen = ({navigation}) => {
  const navigateTo = path => navigation.navigate(path);
  const playbackState = usePlaybackState();

  const [title, setTitle] = useState('Go to playlist');

  // useEffect(() => {
  //   playbackState === TrackPlayer.STATE_NONE ?
  //     setTitle('Create playlist') : setTitle('Back to playlist');
  // }, [playbackState]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#bd8d93', '#72578a', '#213385']}
        style={styles.linearGradient}>
        <Text style={styles.header}>aural</Text>
        <TouchableOpacity onPress={() => navigateTo('Playlist')}>
          <Button
            title={title}
            buttonStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0)',
              borderRadius: 2,
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: 1,
              marginBottom: 250,
            }}
            titleStyle={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'ContrailOne-Regular',
              fontStyle: 'italic',
            }}
            onPress={() => navigateTo('Playlist')}
          />
        </TouchableOpacity>
        <Text style={styles.footer}>Curated audio experiences</Text>
        {/* <Footer /> */}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#213385',
  },
  header: {
    color: 'rgba(1.9, 4.6, 12.3, 0.75)',
    fontFamily: 'Teko-Light',
    fontSize: 90,
    marginBottom: -10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
  },
  footer: {
    marginBottom: -30,
    fontFamily: 'ContrailOne-Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 5,
    height: '100%',
    width: '100%',
  },
});

export default LandingScreen;
