import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {cardStyles} from '../style';
import {useNavigation} from '@react-navigation/native';
import {TaskSquare} from 'iconsax-react-native';
import moment from 'moment';
import {status, taskValues} from '../../utils/constants';
import SCREENS from '../../utils/routes';
import {setCategory} from '../../utils/functions';

const TaskCard = ({item}) => {
  const navigation = useNavigation();
  const {taskDetails} = SCREENS;

  const task = taskValues.find(task => task.id === item.status);
  if (!task) return <TaskSquare />;

  return (
    <Pressable
      onPress={() => navigation.navigate(taskDetails, {item: item})}
      style={cardStyles.container}>
      <View
        style={{
          backgroundColor: task.color,
          padding: 3,
          borderRadius: 5,
        }}>
        {task?.icon}
      </View>

      <View style={cardStyles.content}>
        <Text style={cardStyles.title}>{item.title}</Text>
        <Text style={cardStyles.description}>{item.description}</Text>
        <View>
          <Text style={cardStyles.date}>
            {moment(item.startDate).format('DD/MM/YYYY')}-
            {moment(item.endDate).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
      <View style={cardStyles.category}>
        <Text style={cardStyles.categoryText}>
          {setCategory(item.category)}
        </Text>
      </View>
    </Pressable>
  );
};

export default TaskCard;
