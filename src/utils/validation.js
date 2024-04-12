

import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    description: Yup.string().required('This field is required'),
    startDate: Yup.string().required('This field is required'),
    endDate: Yup.string().required('This field is required'),
  });