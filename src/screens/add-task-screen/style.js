import {StyleSheet} from 'react-native';
import {width} from '../../utils/constants';

const addTastStyles = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    paddingBottom: 15,
    backgroundColor: '#697689',
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollViewContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginVertical: 10,
  },
  btn: {
    width: width * 0.5,
    marginTop: 30,
    backgroundColor: '#697689',
    borderColor:'#697689',
    borderRadius: 15,
    alignSelf: 'center',
  },
  error: {
    color: '#f47373',
    fontSize: 12,
  },
});

export default addTastStyles;
