import {useEffect, useState} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import homeStyles from './style';
import SCREENS from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

// components
import TaskCard from '../../components/home/task-card';
import HeaderComponent from '../../components/home/header-component';
import FloatingActionButton from '../../components/ui/floating-action-button';

function HomeScreen({navigation}) {
  const {addTask} = SCREENS;
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(savedTask));
  
      let completedCount = 0;
      let PendingCount = 0;
      let onGoingCount = 0;
      let CancelCount = 0;
      
      for (const task of JSON.parse(savedTask)) {
        if (task.status === 1) {
          onGoingCount++;
        }
        if (task.status === 2) {
          PendingCount++;
        }
        if (task.status === 3) {
          completedCount++;
        }
        if (task.status === 4) {
          CancelCount++;
        }
        setCompleted(completedCount);
        setOngoing(onGoingCount);
        setPending(PendingCount);
        setCancel(CancelCount);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true); // Yenileme başladığında refreshing state'ini true yap
    getTask(); // Görevleri yeniden al
    setRefreshing(false); // Yenileme bittiğinde refreshing state'ini false yap
  };
  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={homeStyles.container}>
      <FlatList
        data={tasks}
          ListHeaderComponent={
          <HeaderComponent
            ongoing={ongoing}
            pending={pending}
            completed={completed}
            cancel={cancel}
          />
        }
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FloatingActionButton onPress={() => navigation.navigate(addTask)} />
    </View>
  );
}

export default HomeScreen;
