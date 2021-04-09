import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import LinearGradient from 'react-native-linear-gradient';

import Player from '../../player';
import PlaylistItems from './items';
import { getData, storeData } from '../../../utils/playlist';

const PLAYLIST_KEY = 'playlist';

const PlaylistScreen = () => {
  const playbackState = usePlaybackState();
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlist, setPlaylist] = useState(null)

  useEffect(() => {
    const getPlaylist = async () => {
      const playlist = await getData(PLAYLIST_KEY);
      await setPlaylist(playlist);
      setup(playlist);
    };
    getPlaylist();
  }, []);

  useEffect(() => {

  }, [playlist])

  async function setup(playlist) {
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
    togglePlayback(playlist);
  }

  async function togglePlayback(playlist) {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      await TrackPlayer.reset();
      console.log('playlist', playlist);
      await TrackPlayer.add(playlist);
      setCurrentTrack(await TrackPlayer.getCurrentTrack());
    } else {
      setCurrentTrack(currentTrack);
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
        <Player
          onNext={skipToNext}
          style={styles.player}
          onPrevious={skipToPrevious}
          onTogglePlayback={togglePlayback}
          currentTrack={currentTrack}
        />
        <PlaylistItems currentTrack={currentTrack} playlist={playlist} />
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
    // flex: 1,
    // alignItems: 'center',
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
    height: '100%',
    width: '100%',
  },
});
