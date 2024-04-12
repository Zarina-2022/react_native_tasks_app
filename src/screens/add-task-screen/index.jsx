import {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import addTaskStyles from './style';
import uuid from 'react-native-uuid';
import {Formik} from 'formik';
import {Button, Input, Radio, RadioGroup} from '@ui-kitten/components';
import CustomDatepicker from '../../components/ui/datepicker';
import {useNavigation} from '@react-navigation/native';
import {taskSchema} from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/constants';

const AddTaskScreen = () => {
  const [isTitleFocused, setTitleFocused] = useState(false);
  const [isDescriptionFocused, setDescriptionFocused] = useState(false);
  const [isStartDateFocused, setStartDateFocused] = useState(false);
  const [isEndtDateFocused, setEndtDateFocused] = useState(false);

  const navigation = useNavigation();

  const saveTask = async values => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];
      myTask.push(values);
      await AsyncStorage.setItem('tasks', JSON.stringify(myTask));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={addTaskStyles.container}>
      <View style={addTaskStyles.header}>
        <Text style={addTaskStyles.headerText}>Create a New Task</Text>
      </View>
      <ScrollView style={addTaskStyles.scrollViewContainer}>
        <View>
          <Formik
            initialValues={{
              id: uuid.v4(),
              title: 'Development training',
              description: 'Themes related development languages.',
              startDate: '',
              endDate: '',
              category: null,
              status: status.ONGOING,
            }}
            validationSchema={taskSchema}
            onSubmit={values => saveTask(values)}>
            {({handleSubmit, handleChange, setFieldValue, values, errors}) => (
              <View style={addTaskStyles.inputContainer}>
                <Input
                  size="large"
                  style={addTaskStyles.input}
                  caption={errors.title} // shows error under the input box
                  status={
                    errors.title
                      ? 'danger'
                      : isTitleFocused
                      ? 'warning'
                      : 'basic'
                  }
                  value={values.title}
                  label="Title"
                  placeholder="Enter the title of the task"
                  onChangeText={handleChange('title')}
                  onFocus={() => setTitleFocused(true)}
                  onBlur={() => setTitleFocused(false)}
                />

                <Input
                  size="large"
                  multiline
                  style={addTaskStyles.input}
                  caption={errors.description} // shows error under the input box
                  status={
                    errors.description
                      ? 'danger'
                      : isDescriptionFocused
                      ? 'warning'
                      : 'basic'
                  }
                  value={values.description}
                  label="Description"
                  placeholder="Description of a new task"
                  onChangeText={handleChange('description')}
                  onFocus={() => setDescriptionFocused(true)}
                  onBlur={() => setDescriptionFocused(false)}
                />

                <CustomDatepicker
                  size="large"
                  style={addTaskStyles.input}
                  caption={errors.startDate} // shows error under the input box
                  status={
                    errors.startDate
                      ? 'danger'
                      : isStartDateFocused
                      ? 'warning'
                      : 'basic'
                  }
                  date={values.startDate}
                  label="Start Date"
                  placeholder="Choose the start date of a new task"
                  onSelectDate={date => setFieldValue('startDate', date)}
                  onFocus={() => setStartDateFocused(true)}
                  onBlur={() => setStartDateFocused(false)}
                />

                <CustomDatepicker
                  size="large"
                  style={addTaskStyles.input}
                  caption={errors.endDate} // shows error under the input box
                  status={
                    errors.endDate
                      ? 'danger'
                      : isEndtDateFocused
                      ? 'warning'
                      : 'basic'
                  }
                  date={values.endDate}
                  label="Due Date"
                  placeholder="Choose due date of a new task"
                  onSelectDate={date => setFieldValue('endDate', date)}
                  onFocus={() => setEndtDateFocused(true)}
                  onBlur={() => setEndtDateFocused(false)}
                />

                <>
                  <Text category="h6">Select category:</Text>

                  <RadioGroup
                    selectedIndex={values.category}
                    onChange={index => setFieldValue('category', index)}>
                    <Radio status="warning">Software</Radio>
                    <Radio status="warning">Design</Radio>
                    <Radio status="warning">Machinery</Radio>
                  </RadioGroup>
                </>

                <Button
                  style={addTaskStyles.btn}
                  onPress={() => {
                    handleSubmit();
                    navigation.goBack();
                  }}>
                  CREATE
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddTaskScreen;
