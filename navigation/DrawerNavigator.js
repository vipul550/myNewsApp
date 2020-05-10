import React from 'react';
import {View,Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import Sidebar from '../components/SideBar';
import ScreenThree from '../screens/ScreenThree';
import ScreenFour from '../screens/ScreenFour';
import ScreenFive from '../screens/ScreenFive';
import ScreenSix from '../screens/ScreenSix';

const DrawerNavigator = createDrawerNavigator({
  
    Home:{ screen: ScreenOne},
    ReactJs:{ screen: ScreenTwo},
    Python:{ screen: ScreenThree},
    MachineLearning:{ screen: ScreenFour},
    Java:{ screen: ScreenFive},
    BlockChain:{ screen: ScreenSix}

  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: props => <Sidebar {...props} />
  
});

export default DrawerNavigator;


