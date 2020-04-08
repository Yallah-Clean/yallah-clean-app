import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,TouchableOpacity,StyleSheet,
} from 'react-native';
import LoginForm from '../../components/loginForm';
import {globalStyles} from '../../styles/global';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Card, CardItem, Text } from 'native-base';

const Login = ({navigation}) => {

  const handleLogin = async value => {
    // const storage = new LocalStorageService();
    // let user = await storage.getUser();

  

    if (value.email == 'collector@test.com' && value.password == 'Pa$$w0rd') {
      navigation.navigate('Main');
    }
    if (value.email == 'resident@test.com' && value.password == 'Pa$$w0rd') {
      navigation.navigate('Main');
    } else if (value.email == 'org@test.com' && value.password == '123') {
      navigation.navigate('Main');
    }
  };
  return (
    <KeyboardAwareScrollView
    // contentInsetAdjustmentBehavior="automatic"
    style={globalStyles.scrollView}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Card style={{flex:1}}>
          
          <CardItem bordered>
          <LoginForm login={handleLogin} />

          </CardItem>
          <CardItem footer bordered>
<TouchableOpacity>

<Text style={styles.hyperLink} onPress={ ()=> navigation.navigate('Type')}>Don’t have an account? Signup now!</Text> 

</TouchableOpacity>
          </CardItem>
        </Card>

    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
 
  );
};

export default Login;

const styles = StyleSheet.create({
  hyperLink: {
    fontWeight: 'bold',
     textAlign: 'center',

    color: '#2ACF3B',
    letterSpacing: 1,  },
});
