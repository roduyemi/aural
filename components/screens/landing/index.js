import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';

const LandingScreen = ({navigation}) => {
  const navigateTo = path => navigation.navigate(path);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#bd8d93', '#72578a', '#213385']}
        style={styles.linearGradient}>
        <Text style={styles.header}>aural</Text>
        <TouchableOpacity onPress={() => navigateTo('Playlist')}>
          {/* <Text style={styles.text}>Create your playlist</Text> */}
          <Button
            title="Create Playlist"
            buttonStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0)',
              borderRadius: 2,
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: 'ConcertOne-Regular'}}
            onPress={() => navigateTo('Playlist')}
          />
        </TouchableOpacity>
        <Text style={styles.footer}>A cross-platform audio experience</Text>
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
    fontFamily: 'Teko-Light',
    fontSize: 80,
    // marginBottom: 300,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
  },
  footer: {
    marginTop: 150,
    fontStyle: 'italic',
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
