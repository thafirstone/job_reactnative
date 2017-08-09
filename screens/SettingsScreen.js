import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    headerStyle: {
      // marginTop: Platform.OS === 'android' ? 24 : 0,
    },
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="settings"
        size={26}
        style={{ color: tintColor }}
      />
    ),
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
