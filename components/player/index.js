import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {Image, StyleSheet, Text, View, ViewPropTypes} from 'react-native';
import {Icon} from 'react-native-elements';
// import ControlButton from '../controlButton';
import ProgressBar from '../progressBar';

const Player = ({
  style,
  onNext,
  onPrevious,
  onTogglePlayback,
  currentTrack,
  updateTrack,
}) => {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');

  useEffect(() => {
    const updateTrackData = async () => {
      getTrackData(currentTrack);
    };
    updateTrackData();
  }, [currentTrack]);

  const getTrackData = async track => {
    if (track) {
      updateTrack(track);
      const trackData = await TrackPlayer.getTrack(track);
      setTrackData(trackData);
    }
  };

  useTrackPlayerEvents(
    ['playback-track-changed'],
    async ({type, track, nextTrack}) => {
      getTrackData(nextTrack || track);
    },
  );

  const setTrackData = trackData => {
    const {title, artist, artwork} = trackData;
    setTrackTitle(title);
    setTrackArtist(artist);
    setTrackArtwork(artwork);
  };

  const isPlaying = () =>
    [TrackPlayer.STATE_PLAYING, TrackPlayer.STATE_BUFFERING].includes(
      playbackState,
    );

  const buttonType = isPlaying() ? 'pause-circle' : 'play-circle';

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{uri: trackArtwork}} />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <Icon
          name="play-back-outline"
          type="ionicon"
          color="rgba(0, 0, 0, 1)"
          onPress={onPrevious}
          iconStyle={{fontSize: 30, marginTop: 10}}
        />
        <Icon
          // reverse
          name={buttonType}
          type="font-awesome"
          color="rgba(0, 0, 0, 1)"
          onPress={onTogglePlayback}
          iconStyle={{
            fontSize: 30,
            marginTop: 10,
            marginRight: 20,
            marginLeft: 20,
          }}
          reverseColor
          solid
        />
        <Icon
          name="play-forward-outline"
          type="ionicon"
          color="rgba(0, 0, 0, 1)"
          onPress={onNext}
          iconStyle={{fontSize: 30, marginTop: 10}}
        />
      </View>
    </View>
  );
};

export default Player;

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

Player.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    // borderColor: 'rgba(255, 255, 255, 0.1)',
    // borderWidth: 2,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 1},
    marginTop: 80,
  },
  cover: {
    width: 140,
    height: 140,
    marginTop: -50,
    // backgroundColor: 'rgba(87.1, 76.5, 94.6, 0.2)',
    backgroundColor: '#b78494',
    borderRadius: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
  title: {
    marginTop: 10,
  },
  artist: {
    fontWeight: 'bold',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
});
