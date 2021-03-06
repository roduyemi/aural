import React from 'react';

import {useTrackPlayerProgress} from 'react-native-track-player';
import {StyleSheet, View} from 'react-native';

const ProgressBar = () => {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{flex: progress.position, backgroundColor: '#ee6367'}} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
});
