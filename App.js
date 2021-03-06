import React from 'react';
import Expo, { Notifications } from 'expo';
import { StyleSheet, Text, View, Platform, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
import registerPushNotifications from './services/push_notifications';

export default class App extends React.Component {
  componentDidMount() {
    // registerPushNotifications();
    // Notifications.addListener((notification) => {
    //   const { data: { text }, origin } = notification;
    //   if (origin === 'received' && text) {
    //     Alert.alert('New Push Notification', text, [{ text: 'Ok.' }]);
    //   }
    // });
  }
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
                tabBarVisible: true,
                headerTintColor: 'white',
                headerStyle: {
                  backgroundColor: '#009688',
                },
              },
            }),
          },
        },
        {
          tabBarOptions: {
            activeTintColor: 'white',
            showIcon: true,
            showLabel: true,
            inactiveTintColor: '#7f8c8d',
            labelStyle: {
              fontWeight: 'bold',
              fontSize: 12,
              // color: 'white',
              // textDecorationColor: 'yellow',
            },
            style: {
              backgroundColor: '#009688',
            },
            indicatorStyle: {
              backgroundColor: '#f1c40f',
            },

          },
          tabBarPosition: 'bottom',
          swipeEnabled: false,
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
