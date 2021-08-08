import AsyncStorage from '@react-native-async-storage/async-storage';
import playlistData from './playlist.json';

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null
      ? JSON.parse(jsonValue)
      : key.includes('playlist')
      ? playlistData
      : null;
  } catch (e) {
    console.log(e);
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log(`saving ${jsonValue} as ${key}`);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};
