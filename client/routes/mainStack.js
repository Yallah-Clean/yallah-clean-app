import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splach from '../screens/splach';
import Wallet from '../screens/wallet';
import Profile from '../screens/profile';
import CollectorHome from '../screens/collector/home';
import CollectorRequest from '../screens/resident/request';
import ResidentHome from '../screens/resident/home';
import ResidentRequest from '../screens/collector/request';
import OrgHome from '../screens/orgs/home';
import OrgRequest from '../screens/orgs/request';
const Stack = createStackNavigator();
import Options from './routingOptions';

// Route stack navigator screens
const MainStack = ({navigation}) => {
  /** options={()=>Options("Home")} */
  const defaults = 'CollectorHome';

  return (
    <Stack.Navigator initialRouteName={defaults}>
      {/* <Stack.Screen name="Home" component={Home}   ></Stack.Screen> */}
      <Stack.Screen
        name="CollectorHome"
        component={CollectorHome}
        options={() => Options(navigation, 'Home')}
      />
      <Stack.Screen
        name="CollectorRequest"
        component={CollectorRequest}
        options={() => Options(navigation, 'Request')}
      />
      <Stack.Screen
        name="ResidentHome"
        component={ResidentHome}
        options={() => Options(navigation, 'Home')}
      />
      <Stack.Screen
        name="ResidentRequest"
        component={ResidentRequest}
        options={() => Options(navigation, 'Request')}
      />
      <Stack.Screen
        name="OrgHome"
        component={OrgHome}
        options={() => Options(navigation, 'Home')}
      />
      <Stack.Screen
        name="OrgRequest"
        component={OrgRequest}
        options={() => Options(navigation, 'Request')}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={() => Options(navigation, 'Wallet')}
      />
      <Stack.Screen
        name="Splach"
        component={Splach}
        options={() => Options(navigation, '')}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={() => Options(navigation, '')}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

/**const ModalNavigator = StackNavigator(
  {
    Main: { screen: Main },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
); */