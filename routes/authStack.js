

import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/login';
import RegisterType from '../screens/auth/registerType';
import ResidnetRegister from '../screens/auth/residnetRegister';
import CollectorRegister from '../screens/auth/collectorRegister';

// import Home as CollectorHome from '../screens/collector/home';
const Stack = createStackNavigator();

const   options= (title)=>{
    return ({
        title: title,
        headerStyle: {
          backgroundColor: '#A2BEAA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })
}

// Route stack navigator screens
const AuthStack=()=>{

    return (
        <Stack.Navigator initialRouteName="Login">
      
          <Stack.Screen name="Login" component={Login}>
            
          </Stack.Screen>
          <Stack.Screen name="Type" component={RegisterType}>

          </Stack.Screen>
          <Stack.Screen name="CollectorRegister" component={CollectorRegister}>

          </Stack.Screen>
          <Stack.Screen name="ResidnetRegister" component={ResidnetRegister}>

          </Stack.Screen>
       
        </Stack.Navigator>
      );
} 


export default AuthStack;


