import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class AuthScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  state = { }
  render() {
    return (
      <View style={styles.defaut}>
        <Text>Authscreen</Text>
        <Text>Authscreen</Text>
        <Text>Authscreen</Text>
        <Text>Authscreen</Text>
        <Text>Authscreen</Text>
        <Text>Authscreen</Text>
        <Text>Authscreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaut: {
    backgroundColor: '#e67e22',
    flex: 1,
  },
});
