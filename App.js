import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      map: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen },
            },
            {
              navigationOptions: {
                tabBarVisible: false,
              },
            }),
          },
        },
        {
          // tabBarPosition: 'bottom',
          // swipeEnabled: true,
        }
        ),
      },
    }, {
      navigationOptions: {
        tabBarVisible: false,
      },
      swipeEnabled: false,
      tabBarPosition: 'bottom',
      lazy: true,
      // tabBarComponent: TabBarTop,
    },
    );

    return (
      <Provider store={store}>
        <View style={styles.container} >
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
});
