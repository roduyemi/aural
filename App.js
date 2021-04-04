/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, useColorScheme, Image, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './components/header';
import PlaylistScreen from './components/screens/playlist';
import LandingScreen from './components/screens/landing';

import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const HeaderTitle = () => (
    <View>
      <LinearGradient
        colors={['#bd8d93', '#72578a', '#213385']}
        style={styles.linearGradient}
      />
    </View>
  );

  return (
    <NavigationContainer>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <StatusBar barStyle="dark-content" backgroundStyle={backgroundStyle} /> */}
      <Header />
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTitle: '',
          headerStyle: styles.header,
        }}>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Playlist" component={PlaylistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  header: {
    backgroundColor: '#bd8d93',
  },
});

export default App;
