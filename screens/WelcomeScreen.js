import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { id: '0', text: 'Bienvenue dans JobApp', color: '#2ecc71' },
  { id: '1', text: 'Utilisez cette application pour trouver un emploi', color: '#34495e' },
  { id: '2', text: 'Choisissez votre ville, ensuite glisser vers la suite', color: '#7f8c8d' },
];
export default class WelcomeScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  state = { }
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render() {
    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

