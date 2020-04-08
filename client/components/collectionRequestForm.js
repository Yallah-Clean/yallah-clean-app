import React from 'react';
import {Container,Button, Text,Header, Content, Picker, Form , Icon} from 'native-base';

import {StyleSheet,   TextInput, View} from 'react-native';
import {globalStyles} from '../styles/global.js';
import {Formik} from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const formSchema = yup.object({
  matrial: yup.string().required(),

  weight: yup.string().required(),
});

export default function CollectionRequestForm({add}) {
  
  return (
    <View >
      <Formik
        initialValues={{matrial: '0', weight: '0'}}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          add(values);
        }}>
        {props => (
          
             <Content>
                 <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select Matrial"
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  style={{width: undefined}}
                  // selectedValue={props.values.matrial}
                  // onValueChange={props.handleChange('matrial')}>
                      // passing value directly from formik
                      selectedValue={props.values.matrial}
                      // changing value in formik
                      onValueChange={itemValue => props.setFieldValue('matrial', itemValue)}
                  >
                  <Picker.Item label="Organic" value="0" />
                  <Picker.Item label="Plastic" value="1" />
                  <Picker.Item label="Glass" value="2" />
                </Picker>
                <TextInput
                  style={globalStyles.input}
                  placeholder="K.G"
                  onChangeText={props.handleChange('weight')}
                  onBlur={props.handleBlur('weight')}
                  value={props.values.weight}
                />
                <Text style={globalStyles.errorText}>
                  {props.touched.weight && props.errors.weight}
                </Text>
                <View   >
             <Button small rounded block success   onPress={props.handleSubmit}>
              <Text> Add </Text>
            </Button>
            </View>
             </Content>
        )}
      </Formik>
    </View>
  );
}
