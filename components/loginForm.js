import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const loginSchema = yup.object({
 email: yup.string()
            .email()
            .required(),

  password: yup.string()
    .required()
     
});

export default function LoginForm({  login }) {

  return (
    
    <View style={globalStyles.container}>
     
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          login(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder=' Email'
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')} 
              value={props.values.email}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>

            <TextInput
              style={globalStyles.input}
              secureTextEntry={true} 
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              value={props.values.password}
            />
            <Text style={globalStyles.errorText}>{props.touched.password && props.errors.password}</Text>
          <FlatButton onPress={props.handleSubmit} text='Login' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}