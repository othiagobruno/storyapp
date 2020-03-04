import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from '../pages/Dashboard';
import SelectChat from '../pages/Chat/SelectChat';

import Colors from '../constants/Colors';

export default createAppContainer(
  createSwitchNavigator(
    {
      App: createStackNavigator({
        MainMenu: createBottomTabNavigator(
          {
            Dashboard,
            SelectChat,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: Colors.backgroundDarker,
              inactiveTintColor: Colors.lighter,
              style: {
                backgroundColor: Colors.white,
                shadowOpacity: 0,
                shadowOffset: {
                  height: 0,
                },
                shadowRadius: 0,
              },
            },
          }
        )
      },
        {
          headerMode: 'none',
          navigationOptions: {
            headerVisible: false,
          }
        }
      ),
    },
    {
      initialRouteName: 'App',
    },
  ),
);
