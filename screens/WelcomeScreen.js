import React, { Component } from 'react';
import _ from 'lodash';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { AppLoading, Font } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { id: '0', text: 'Bienvenue dans JobApp', color: '#3498db' },
  { id: '1', text: 'Utilisez cette application pour trouver un emploi', color: '#34495e' },
  { id: '2', text: 'Choisissez votre ville, ensuite glisser vers la suite', color: '#95a5a6' },
];
export default class WelcomeScreen extends Component {
  static navigationOptions = {
    // tabBarVisible: false,
  };
  state = { token: null, fontLoaded: false }
  async componentWillMount() {
    const token = await AsyncStorage.getItem('fb_token');
    if (!_.isNull(token)) {
      this.props.navigation.navigate('map');
    } else {
      this.setState({ token: false });
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      Arial: require('./../assets/fonts/arial.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render() {
    if (_.isNull(this.state.token) && !this.state.fontLoaded) {
      return (<AppLoading style={{ color: 'red' }} />);
    }
    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

