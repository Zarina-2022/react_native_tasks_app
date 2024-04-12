import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Button, Divider} from '@ui-kitten/components';
import moment from 'moment';
import {status, taskValues} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import detailStyles from './style';
import { setCategory } from '../../utils/functions';

const TaskDetails = ({route}) => {
  const {item} = route?.params

  const statusTitle = taskValues.find(task => task.id === item.status)?.title;
  
  const deleteTask = async () => {
    try {
      // Mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return; // Kayıtlı görev yoksa işlemi sonlandır
      }
      const tasks = JSON.parse(savedTasks);

      // Silinecek görevi filtrele
      const filteredTasks = tasks.filter(task => task.id !== item.id);

      // Filtrelenmiş görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      console.log('Görev silindi.');
    } catch (error) {
      console.error('Görev silinirken hata oluştu:', error);
    }
  };

  const updateTask = async newStatus => {
    try {
      // Mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return; // Kayıtlı görev yoksa işlemi sonlandır
      }
      const tasks = JSON.parse(savedTasks);

      // Güncellenecek görevi bul
      const updatedTasks = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task,
            status: newStatus, // Yeni durumu uygula
          };
        }
        return task;
      });

      // Güncellenmiş görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      console.log('Görev güncellendi:', updatedTasks);
    } catch (error) {
      console.error('Görev güncellenirken hata oluştu:', error);
    }
  };
  return (
    <View style={detailStyles.container}>
      <ScrollView>
        <View style={detailStyles.scrollview}>
          <Text style={detailStyles.text}>Title:</Text>
          <Text>{item.title}</Text>
        </View>
        <Divider />
        <View style={detailStyles.scrollview}>
          <Text style={detailStyles.text}>Description:</Text>
          <Text>{item.description}</Text>
        </View>
        <Divider />
        <View style={detailStyles.scrollview}>
          <Text style={detailStyles.text}>Start Date:</Text>
          <Text>{moment(item.startDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider />
        <View style={detailStyles.scrollview}>
          <Text style={detailStyles.text}>End Date:</Text>
          <Text>{moment(item.endDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider />
        <View style={detailStyles.scrollview}>
          <Text style={detailStyles.text}>Category:</Text>
          <Text>{setCategory(item.category)}</Text>
        </View>
        <Divider />
        <View style={detailStyles.scrollview}>
          <Text style={detailStyles.text}>Status:</Text>
          <Text>
            {statusTitle}
          </Text>
        </View>
      </ScrollView>
      <View style={{bottom: 20}}>
        <Button
          onPress={() => updateTask(status.PENDING)}
          style={detailStyles.button}
          status="primary">
          PENDING
        </Button>
        <Button
          onPress={() => updateTask(status.COMPLETED)}
          style={detailStyles.button}
          status="success">
          COMPLETED
        </Button>
        <Button
          onPress={() => updateTask(status.CANCEL)}
          style={detailStyles.button}
          status="danger">
          CANCEL
        </Button>
        <Button
          onPress={deleteTask}
          style={detailStyles.button}
          status="warning">
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default TaskDetails;
