import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import LinearGradient from 'react-native-linear-gradient';

import Player from '../../player';
import playlistData from './playlist.json';
import localTrack from './pure.m4a';

const PlaylistScreen = () => {
  const playbackState = usePlaybackState();
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
    togglePlayback();
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add(playlistData);
      setCurrentTrack(await TrackPlayer.getCurrentTrack());
    } else {
      setCurrentTrack(await TrackPlayer.getCurrentTrack());
      if (playbackState === TrackPlayer.STATE_PAUSED || playbackState === TrackPlayer.STATE_READY) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#bd8d93', '#72578a', '#213385']}
        style={styles.linearGradient}>
        {/* <Text style={styles.description}>
        </Text> */}
        <Player
          onNext={skipToNext}
          style={styles.player}
          onPrevious={skipToPrevious}
          onTogglePlayback={togglePlayback}
          currentTrack={currentTrack}
        />
        {/* <Text style={styles.state}>{getStateName(playbackState)}</Text> */}
      </LinearGradient>
    </View>
  );
};

export default PlaylistScreen;

// PlaylistScreen.navigationOptions = {
//   title: 'Playlist Example',
// };

function getStateName(state) {
  switch (state) {
    case TrackPlayer.STATE_NONE:
      return 'None';
    case TrackPlayer.STATE_PLAYING:
      return 'Playing';
    case TrackPlayer.STATE_PAUSED:
      return 'Paused';
    case TrackPlayer.STATE_STOPPED:
      return 'Stopped';
    case TrackPlayer.STATE_BUFFERING:
      return 'Buffering';
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  description: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
  },
  player: {
    // marginTop: 40,
  },
  state: {
    fontSize: 18,
    marginTop: 20,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 5,
    height: '100%',
    width: '100%',
  },
});
