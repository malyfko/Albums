import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS } from 'consts';

export const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      {children}
    </Text>
  </TouchableOpacity>
);


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: COLORS.blue,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.blue,
    marginLeft: 5,
    marginRight: 5,
    position: 'relative',
  }
};
