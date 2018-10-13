import React from 'react';
import { View } from 'react-native';

import { COLORS } from 'consts';

export const CardSection = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: COLORS.gray,
    position: 'relative',
  }
};
