import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ControlButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
    <Text style={styles.controlButtonText}>{title}</Text>
  </TouchableOpacity>
);

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1,
  },
  controlButtonText: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Teko-Light',
  },
});

export default ControlButton;
