

import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/login';
import RegisterType from '../screens/auth/registerType';
import ResidnetRegister from '../screens/auth/residnetRegister';
import CollectorRegister from '../screens/auth/collectorRegister';
import Options from './routingOptions'

// import Home as CollectorHome from '../screens/collector/home';
const Stack = createStackNavigator();


// Route stack navigator screens
const AuthStack=({navigation})=>{

    return (
        <Stack.Navigator initialRouteName="Login">
      
          <Stack.Screen name="Login" component={Login} options={()=>Options(navigation,"Login")}>
            
          </Stack.Screen>
          <Stack.Screen name="Type" component={RegisterType} options={()=>Options(navigation,"Select Type")}>

          </Stack.Screen>
          <Stack.Screen name="CollectorRegister" component={CollectorRegister} options={()=>Options(navigation,"Register")}>

          </Stack.Screen>
          <Stack.Screen name="ResidnetRegister" component={ResidnetRegister} options={()=>Options(navigation,"Register")}>

          </Stack.Screen>
       
        </Stack.Navigator>
      );
} 


export default AuthStack;


