import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fabStyles} from '../style';
import {Add} from 'iconsax-react-native';

const FloatingActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={fabStyles.container}>
      <Add size="32" variant="Linear" color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
