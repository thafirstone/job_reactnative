import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import { clearLikedJobs } from './../actions';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    // headerStyle: {
    //   // marginTop: Platform.OS === 'android' ? 24 : 0,
    // },
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
      <View style={{ marginTop: 20 }}>
        <Button
          title='Reset Liked Jobs'
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
