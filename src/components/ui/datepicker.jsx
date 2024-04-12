import React, {useState} from 'react';
import {View} from 'react-native';
import {Datepicker} from '@ui-kitten/components';

const CustomDatepicker = props => {
  const {onSelectDate}=props

  return (
    <View>
      <Datepicker
        {...props}
        onSelect={nextDate => onSelectDate(nextDate)}
      />
    </View>
  );
};

export default CustomDatepicker;
