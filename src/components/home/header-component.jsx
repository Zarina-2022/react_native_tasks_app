import {FlatList, Pressable, Text, View} from 'react-native';
import React from 'react';
import {
  Activity,
  ArrowCircleRight2,
  ArrowRotateRight,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';
import COLORS from '../../theme/colors';
import {headerStyles} from '../style';

const HeaderComponent = ({ongoing, pending, completed, cancel}) => {
  const headers = [
    {
      id: 1,
      title: 'Ongoing',
      color: COLORS.blue,
      icon: <Activity size="32" variant='Bulk' color="#fff" />,
      count: ongoing,
    },
    {
      id: 2,
      title: 'Pending',
      color: COLORS.orange,
      icon: <ArrowRotateRight size="32"variant='Bulk' color="#fff" />,
      count: pending,
    },
    {
      id: 3,
      title: 'Completed',
      color: COLORS.green,
      icon: <TickCircle size="32" variant='Bulk' color="#fff" />,
      count: completed,
    },
    {
      id: 4,
      title: 'Cancel',
      color: COLORS.red,
      icon: <CloseCircle size="32" variant='Bulk' color="#fff" />,
      count: cancel,
    },
  ];

  const Task = ({item}) => {
    return (
      <Pressable style={[headerStyles.btn, {backgroundColor: item.color}]}>
        {item.icon}
        <View style={headerStyles.btnContainer}>
          <View>
            <Text style={headerStyles.btnText1}>{item.title}</Text>
            <Text style={headerStyles.btnText2}>{item.count} Task</Text>
          </View>
          <View>
            <ArrowCircleRight2 size="20" color="#fff" />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={headerStyles.container}>
      <FlatList
        numColumns={2}
        data={headers}
        renderItem={({item}) => <Task item={item} />}
      />
      <View>
        <Text style={headerStyles.text}>All Tasks</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
