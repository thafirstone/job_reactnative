import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  state = { }
  render() {
    return (
      <View style={styles.defaut}>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
        <Text>WelcomeScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaut: {
    backgroundColor: '#1abc9c',
    flex: 1,
  },
});
