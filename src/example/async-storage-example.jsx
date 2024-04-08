import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  const handleSaveState = () => {
    setName('Zarina');
  };
  const handleRemoveState = () => {
    setName('');
  };

  const setTokenn = async value => {
    try {
      // setItem ile storage kaydettik
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      // saving error
    }
  };

  const getToken = async () => {
    try {
      // getItem ile storage'tan okuduk, display yaptik.
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    } catch (e) {
      // saving error
    }
  };

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setToken(''); // Set the token state to an empty string
    } catch (e) {
      // Handle error
    }
  };

  useEffect(() => {
    getToken()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.nameText}>{token}</Text>
      </View>
      <View style={styles.btnWrapper}>

        <TouchableOpacity style={styles.btnSave} onPress={handleSaveState}>
          <Text style={styles.btnText}>Save usestate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRemove} onPress={handleRemoveState}>
          <Text style={styles.btnText}>Remove</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.btnSave}
          onPress={() => setTokenn('9834752345hjwegfhjey')}>
          <Text style={styles.btnText}>Save storage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRemove} onPress={() => removeToken()}>
          <Text style={styles.btnText}>Remove</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
};

export default AsyncStorageExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    marginTop: 100,
    marginBottom: 30,
  },
  nameText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnWrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  btnSave: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    borderRadius: 10,
  },
  btnRemove: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

// install storage: npm install @react-native-async-storage/async-storage
