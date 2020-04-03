import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import LoginForm from '../../components/loginForm';
import Card from '../../shared/card';
import Thumbnail from '../../shared/thumbnail';
import HyperLink from '../../shared/hyperlink';
import {globalStyles} from '../../styles/global';
import LocalStorageService from '../../service/core/LocalStorage.service';
const Login = ({navigation}) => {
  const Url = require('../../assets/images/icon.png');

  const handleLogin = async value => {
    const storage = new LocalStorageService();
    let user = await storage.getUser();

    console.log(value, 'value');
    console.log(navigation, 'navigation');

    if (value.email == user.email && value.password == user.password) {
      navigation.navigate('Main');
    } else if (value.email == 'org@test.com' && value.password == '123') {
      navigation.navigate('Main');
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Thumbnail source={Url} />
        <Card>
          {/* <Image source={Url}  /> */}

          <LoginForm login={handleLogin} />
        </Card>
        <View style={globalStyles.sectionContainer}>
          <HyperLink
            goToURL={() => navigation.navigate('Type')}
            title={'Register?'}
            style={styles.hyperLink}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  hyperLink: {
    // left:55,
  },
});
