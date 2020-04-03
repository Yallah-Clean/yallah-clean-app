import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// stacks
import MainStack from './mainStack';
import AuthStack from './authStack';

// drawer navigation options


const Drawer = createDrawerNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Auth">
        <Drawer.Screen name="Main" children={MainStack} />
        <Drawer.Screen name="Auth" children={AuthStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  
  
    );
};
export default Navigator;


