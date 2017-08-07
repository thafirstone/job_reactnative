import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    headerStyle: {
      // marginTop: Platform.OS === 'android' ? 24 : 0,
    },
  });
  state = { }
  render() {
    return (
      <View>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}
