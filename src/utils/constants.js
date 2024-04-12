import {Dimensions} from 'react-native';
import COLORS from '../theme/colors';
import { Activity, ArrowRotateRight, CloseCircle, TickCircle } from 'iconsax-react-native';

// Get the device screen dimensions
export const {width, height} = Dimensions.get('window');

export const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLETED: 3,
  CANCEL: 4,
};

export const taskValues = [
  {
    id: 1,
    title: 'Ongoing',
    color: COLORS.blue,
    icon: <Activity size="32" color="#fff" />,
  },
  {
    id: 2,
    title: 'Pending',
    color: COLORS.yellow,
    icon: <ArrowRotateRight size="32" color="#fff" />,
  },
  {
    id: 3,
    title: 'Completed',
    color: COLORS.green,
    icon: <TickCircle size="32" color="#fff" />,
  },
  {
    id: 4,
    title: 'Cancel',
    color: COLORS.red,
    icon: <CloseCircle size="32" color="#fff" />,
  },
];
