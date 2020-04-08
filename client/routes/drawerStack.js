import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// stacks
import MainStack from './mainStack';
import AuthStack from './authStack';
import Splach from '../screens/splach';

// screens ' temp'

 import Wallet from '../screens/wallet';
import Profile from '../screens/profile';
import CollectorHome from '../screens/collector/home';
import CollectorRequest from '../screens/resident/request';
import ResidentHome from '../screens/resident/home';
import ResidentRequest from '../screens/collector/request';
import OrgHome from '../screens/orgs/home';
import OrgRequest from '../screens/orgs/request';
import FullfillCollection from '../screens/collector/fullfillRequest';

// drawer navigation options

const Drawer = createDrawerNavigator();
const Navigator = props => {
  console.log(props, 'props');

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Splach">
        <Drawer.Screen name="Splach" component={Splach} />
        <Drawer.Screen name="Main" children={MainStack} />
        <Drawer.Screen name="Auth" children={AuthStack} />
        <Drawer.Screen
        name="CollectorHome"
        component={CollectorHome}
       />
      <Drawer.Screen
        name="CollectorRequest"
        component={CollectorRequest}
       />
      <Drawer.Screen
        name="fullfillRequest"
        component={FullfillCollection}
       />
      <Drawer.Screen
        name="ResidentHome"
        component={ResidentHome}
       />
      <Drawer.Screen
        name="ResidentRequest"
        component={ResidentRequest}
       />
      <Drawer.Screen
        name="OrgHome"
        component={OrgHome}
       />
      <Drawer.Screen
        name="OrgRequest"
        component={OrgRequest}
       />
      <Drawer.Screen
        name="Wallet"
        component={Wallet}
      />
     
      <Drawer.Screen
        name="Profile"
        component={Profile}
       />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
