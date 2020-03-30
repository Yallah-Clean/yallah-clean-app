import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {globalStyles} from '../styles/global.js';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{6,}$/;

const collectorRegisterSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(),

  username: yup.string(),
  phone: yup.string(),
  address: yup.string(),

  password: yup
    .string()
    .matches(passwordPattern, 'Password is not elligible')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Please enter a similar password')
    .required('Please confirm your password'),
});

export default function CollectorRegisterForm({register}) {
  let state = {
    ethAddress: '',
    privateKey: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    category: 'collector',
    phone: '',
    address: '',
    walletAddress: '',
  };
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={state}
        validationSchema={collectorRegisterSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          register(values);
        }}>
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder=" User Name"
              onChangeText={props.handleChange('username')}
              onBlur={props.handleBlur('username')}
              value={props.values.username}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.username && props.errors.username}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder=" Email"
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder=" Phone"
              onChangeText={props.handleChange('phone')}
              onBlur={props.handleBlur('phone')}
              value={props.values.phone}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.phone && props.errors.phone}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder=" Address"
              onChangeText={props.handleChange('address')}
              onBlur={props.handleBlur('address')}
              value={props.values.address}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.address && props.errors.address}
            </Text>

            <TextInput
              style={globalStyles.input}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
            <TextInput
              style={globalStyles.input}
              secureTextEntry={true}
              placeholder="Confirm Password"
              onChangeText={props.handleChange('confirmPassword')}
              onBlur={props.handleBlur('confirmPassword')}
              value={props.values.confirmPassword}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.confirmPassword && props.errors.confirmPassword}
            </Text>
            <FlatButton onPress={props.handleSubmit} text="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
