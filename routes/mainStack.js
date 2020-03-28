import React from 'react'
import Header from '../shared/header';
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

const   options= (navigation ,title )=>{
 
    return ({
      headerTitle: () => { return (<Header title={title} navigation={navigation} />)},
      headerStyle: {
          backgroundColor: '#A2BEAA',
          height: 60 ,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })
}

// Route stack navigator screens
const MainStack=({navigation})=>{
  
/** options={()=>options("Home")} */
    return (
        <Stack.Navigator initialRouteName="Home" >
          {/* <Stack.Screen name="Home" component={Home}   ></Stack.Screen> */}
          <Stack.Screen name="CollectorHome" component={CollectorHome} options={()=>options(navigation,"Home")}></Stack.Screen>
          <Stack.Screen name="CollectorRequest" component={CollectorRequest} options={()=>options(navigation,"Request")}></Stack.Screen>
          <Stack.Screen name="ResidentHome" component={ResidentHome}options={()=>options(navigation,"Home")}></Stack.Screen>
          <Stack.Screen name="ResidentRequest" component={ResidentRequest}options={()=>options(navigation,"Request")}></Stack.Screen>
          <Stack.Screen name="OrgHome" component={OrgHome}options={()=>options(navigation,"Home")}></Stack.Screen>
          <Stack.Screen name="OrgRequest" component={OrgRequest}options={()=>options(navigation,"Request")}></Stack.Screen>
          <Stack.Screen name="Wallet" component={Wallet}options={()=>options(navigation,"Wallet")}></Stack.Screen>
          <Stack.Screen name="Splach" component={Splach}options={()=>options(navigation,"")}></Stack.Screen>
         
        </Stack.Navigator>
      );
} 


export default MainStack;


