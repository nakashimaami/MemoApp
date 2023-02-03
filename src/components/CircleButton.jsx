import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { string } from 'prop-types';

export default function CircleButton(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

CircleButton.prototypes = {
  children: string.isRequired,
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
