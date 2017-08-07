import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { Button as ElementsButton } from 'react-native-elements';

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: <ElementsButton
      backgroundColor='rgba(0,0,0,0)'
      color='rgba(0,122,255,1)'
      title="Settings"
      onPress={() => navigation.navigate('settings')}
    />,
    headerStyle: {
      // marginTop: Platform.OS === 'android' ? 24 : 0,
    },
  });
  state = { }
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsButton: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
