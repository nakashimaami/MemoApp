import { func, shape, string } from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.prototypea = {
  label: string.isRequired,
  onPress: func,
  styles: shape(),
};

Button.defaultProps = {
  onPress: null,
  style: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor:'#05FF00',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#862121',
  },
});
