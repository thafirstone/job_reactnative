import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage, Platform } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false,
  };
  state = { }
  componentWillMount = async () => {
    console.log('-------- will mount -----');
    // AsyncStorage.removeItem('fb_token');
    console.log(Platform.OS, this.props.token);
    await this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }
  componentWillReceiveProps(nextProps) {
    console.log('-------- du receive propss -----');
    this.onAuthComplete(nextProps);
  }
  onAuthComplete(props) {
    console.log(Platform.OS, props.token);
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }
  render() {
    return (
      <View style={styles.defaut} />
    );
  }
}

const styles = StyleSheet.create({
  defaut: {
    // backgroundColor: '#e67e22',
    flex: 1,
  },
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
