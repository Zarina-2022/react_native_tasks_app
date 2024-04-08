import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {Button, Input, Toggle} from '@ui-kitten/components';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  surname: Yup.string().required('This field is required'),
  birthday: Yup.string().required('This field is required'),
  gender: Yup.string().required('This field is required'),
  phone: Yup.string()
    .min(9, 'Phone number must be at least 9 digits')
    .max(12, 'Phone number cannot exceed 12 digits')
    .required('This field is required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('This field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'En az 6 karakter, bir küçük, bir büyük harf, bir rakam içermelidir.',
    ),
  passwordConfirm: Yup.string()
    .required('This field is required')
    .oneOf([Yup.ref('password')], 'Passwords do not match.'),
  agreementConfirm: Yup.bool()
    .required('This field is required')
    .oneOf([true], 'You must confirm the contract'),
});

const FormExample = () => {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = isChecked => {
    setChecked(isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTest}>Register</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              birthday: '',
              gender: '',
              phone: '',
              email: '',
              password: '',
              passwordConfirm: '',
              agreementConfirm: false,
            }}
            validationSchema={registerSchema}
            onSubmit={values => Alert.alert(JSON.stringify(values, 0, 2))}>
            {({handleSubmit, handleChange, values, setFieldValue, errors}) => (
              <View style={styles.inputContainer}>
                <Input
                  style={styles.input}
                  caption={errors.name} // shows errorunder the input box
                  status={errors.name ? 'danger' : 'basic'}
                  value={values.name}
                  label={'Name'}
                  placeholder="Enter your name"
                  onChangeText={handleChange('name')}
                />

                <Input
                  style={styles.input}
                  caption={errors.surname}
                  status={errors.surname ? 'danger' : 'basic'}
                  value={values.surname}
                  label={'Surname'}
                  placeholder="Enter your surname"
                  onChangeText={handleChange('surname')}
                />

                <Input
                  style={styles.input}
                  caption={errors.birthday}
                  status={errors.birthday ? 'danger' : 'basic'}
                  value={values.birthday}
                  label={'Birthday'}
                  placeholder="Enter your birthday"
                  onChangeText={handleChange('birthday')}
                />

                <Input
                  style={styles.input}
                  caption={errors.gender}
                  status={errors.gender ? 'danger' : 'basic'}
                  value={values.gender}
                  label={'Gender'}
                  placeholder="Enter your gender"
                  onChangeText={handleChange('gender')}
                />

                <Input
                  style={styles.input}
                  caption={errors.phone}
                  status={errors.phone ? 'danger' : 'basic'}
                  value={values.phone}
                  label={'Phone'}
                  placeholder="Enter your phone"
                  onChangeText={handleChange('phone')}
                />

                <Input
                  style={styles.input}
                  caption={errors.email}
                  status={errors.email ? 'danger' : 'basic'}
                  value={values.email}
                  label={'E-mail'}
                  placeholder="Enter your e-mail"
                  onChangeText={handleChange('email')}
                />

                <Input
                  secureTextEntry
                  style={styles.input}
                  caption={errors.password}
                  status={errors.password ? 'danger' : 'basic'}
                  value={values.password}
                  label={'Password'}
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                />

                <Input
                  secureTextEntry
                  style={styles.input}
                  caption={errors.passwordConfirm}
                  status={errors.passwordConfirm ? 'danger' : 'basic'}
                  value={values.passwordConfirm}
                  label={'Confirm password'}
                  placeholder="Repeat your password"
                  onChangeText={handleChange('passwordConfirm')}
                />

                <View>
                  <Toggle
                    caption={errors.agreementConfirm}
                    status={errors.agreementConfirm ? 'danger' : 'basic'}
                    checked={values.agreementConfirm}
                    onChange={value =>
                      setFieldValue('agreementConfirm', value)
                    }>
                    I accept the user and privacy agreement
                  </Toggle>
                  {errors.agreementConfirm && (
                    <Text style={styles.error}>{errors.agreementConfirm}</Text>
                  )}
                </View>

                <Button style={styles.btn} onPress={handleSubmit}>
                  Save
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

export default FormExample;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  header: {
    padding: 20,
    backgroundColor: 'green',
    minHeight: 110,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerTest: {
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
    marginTop: 30,
    backgroundColor: 'green',
  },
  toggle: {
    backgroundColor: 'green',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

// download formik: npm install formik --save
