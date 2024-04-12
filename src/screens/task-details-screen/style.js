import {StyleSheet} from 'react-native';
import COLORS from '../../theme/colors';

const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
  scrollview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default detailStyles;
