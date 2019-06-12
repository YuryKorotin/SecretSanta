import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import NewEventScreen from '../screens/NewEventScreen';
import HomeScreen from '../screens/HomeScreen';

const NewEventStack = createStackNavigator({
  NewEvent: { screen: NewEventScreen }
});

const Navigation = createStackNavigator({
  Home: { screen: HomeScreen},
  NewEvent: { screen: NewEventScreen }
});

export default createAppContainer(createSwitchNavigator({
  Main: Navigation,
}));