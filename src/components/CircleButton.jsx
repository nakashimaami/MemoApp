import React from 'react';
import { View, StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { string, shape } from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AntDesign } from '@expo/vector-icons';

export default function CircleButton(props) {
  // eslint-disable-next-line react/prop-types
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <AntDesign name={name} size={24} color="#862121" />
    </View>
  );
}

CircleButton.prototypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#05FF00',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#862121',
    fontSize: 40,
    lineHeight: 40,
  },
});
