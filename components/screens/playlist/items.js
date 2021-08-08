import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  VirtualizedList,
  SafeAreaView,
  Image,
} from 'react-native';
// import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import playlistData from './playlist.json';

const PlaylistItems = ({currentTrack, playlist}) => {
  // [playlistData, setPlaylistData] = useState(playlist);
  // const playbackState = usePlaybackState();

  // useEffect(() => {
  //   setPlaylistData(playlist)
  // }, [playlist])

  const track = async () => await TrackPlayer.getCurrentTrack();

  const getItemCount = data => 5;

  const getItemStyle = id =>
    id === currentTrack ? styles.playingItem : styles.idleItem;

  const Item = ({id, url, title, artist, artwork, duration}) => (
    <View style={getItemStyle(id)}>
      <Image style={styles.tinyLogo} source={{uri: artwork}} />
      <View style={styles.textData}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{artist}</Text>
        {/* <Text style={styles.text}>{duration}</Text> */}
      </View>
    </View>
  );

  const getItem = (item, index) => item[index];

  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        data={playlistData}
        renderItem={({item}) => (
          <Item
            id={item.id}
            url={item.url}
            title={item.title}
            artist={item.artist}
            artwork={item.artwork}
            duration={item.duration}
          />
        )}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

export default PlaylistItems;

const itemStyle = {
  // height: 150,
  flexDirection: 'row',
  marginVertical: 8,
  // marginHorizontal: 16,
  padding: 10,
  borderWidth: 1,
  borderRadius: 2,
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
  },
  playingItem: {
    ...itemStyle,
    backgroundColor: 'rgba(120.5, 130.7, 200, 0.5)',
    // borderColor: 'rgba(120.5, 130.7, 200, 0.9)'
    borderWidth: 0,
  },
  idleItem: {
    ...itemStyle,
    // borderColor: 'rgba(120.5, 130.7, 200, 0.9)',
    borderWidth: 0,
  },
  textData: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {},
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 4,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
});
