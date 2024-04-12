import {StyleSheet} from 'react-native';
import COLORS from '../theme/colors';

export const fabStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f47373',
    width: 60,
    height: 60,
    borderRadius: 60,
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
});

export const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  description: {
    fontSize: 14,
    fontWeight: 600,
    color: COLORS.gray,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: '300',
    color: 'gray',
  },
  category: {
    marginLeft: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '300',
    color: 'gray',
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    margin: 10,
    marginHorizontal: 20,
  },
  btn: {
    width: '45%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  btnText1: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
  btnText2: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
