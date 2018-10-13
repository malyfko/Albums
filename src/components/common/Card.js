import React from 'react';
import { View } from 'react-native';

import { COLORS } from 'consts';

export const Card = ({ children }) => (
  <View style={styles.containerStyle}>
    {children}
  </View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.gray,
    borderBottomWidth: 0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};
