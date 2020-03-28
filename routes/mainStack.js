import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splach from '../screens/splach';
import Wallet from '../screens/wallet';
import CollectorHome from '../screens/collector/home';
import CollectorRequest from '../screens/resident/request';
import ResidentHome from '../screens/resident/home';
import ResidentRequest from '../screens/collector/request';
import OrgHome from '../screens/orgs/home';
import OrgRequest from '../screens/orgs/request';
const Stack = createStackNavigator();
import Options from './routingOptions'


// Route stack navigator screens
const MainStack=({navigation})=>{
  
/** options={()=>Options("Home")} */
    return (
        <Stack.Navigator initialRouteName="Home" >
          {/* <Stack.Screen name="Home" component={Home}   ></Stack.Screen> */}
          <Stack.Screen name="CollectorHome" component={CollectorHome} options={()=>Options(navigation,"Home")}></Stack.Screen>
          <Stack.Screen name="CollectorRequest" component={CollectorRequest} options={()=>Options(navigation,"Request")}></Stack.Screen>
          <Stack.Screen name="ResidentHome" component={ResidentHome}options={()=>Options(navigation,"Home")}></Stack.Screen>
          <Stack.Screen name="ResidentRequest" component={ResidentRequest}options={()=>Options(navigation,"Request")}></Stack.Screen>
          <Stack.Screen name="OrgHome" component={OrgHome}options={()=>Options(navigation,"Home")}></Stack.Screen>
          <Stack.Screen name="OrgRequest" component={OrgRequest}options={()=>Options(navigation,"Request")}></Stack.Screen>
          <Stack.Screen name="Wallet" component={Wallet}options={()=>Options(navigation,"Wallet")}></Stack.Screen>
          <Stack.Screen name="Splach" component={Splach}options={()=>Options(navigation,"")}></Stack.Screen>
         
        </Stack.Navigator>
      );
} 


export default MainStack;


