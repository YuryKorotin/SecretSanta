import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import NewEventScreen from '../screens/NewEventScreen';

import MainTabNavigator from './MainTabNavigator';

const NewEventStack = createStackNavigator({
  NewEvent: { screen: NewEventScreen }
});

const Navigation = createStackNavigator({
  Tabs: {
    screen: MainTabNavigator,
  },
  NewEvent: { screen: NewEventScreen }
});

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: Navigation,
  //NewEvent: NewEventStack
}));