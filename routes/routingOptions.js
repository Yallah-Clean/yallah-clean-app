import React from 'react';

import Header from '../shared/header';

const Options = (navigation, title) => {
  return {
    headerTitle: () => {
      return <Header title={title} navigation={navigation} />;
    },
    // defaultNavigationOptions: {
    //   header: null,
    // },
    headerLeft: null,

    // headerStyle: {
    //     backgroundColor: '#A2BEAA',
    //     height: 60 ,
    //     color:"#fff",

    //   },
    //  // headerTintColor: '#fff',

    //   headerTitleStyle: {
    //    // fontWeight: 'bold',
    //     color:"#fff",
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //  },
  };
};

export default Options;
