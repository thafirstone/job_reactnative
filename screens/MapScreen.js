import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Keyboard } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Fumi } from 'react-native-textinput-effects';

import * as actions from '../actions';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="google-maps"
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
    mapLoaded: false,
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }
  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, this.props.query, () => {
      Keyboard.dismiss();
      this.props.navigation.navigate('deck');
    });
  }

  renderInput() {
    return (
      <Fumi
        label={'Enter a job'}
        iconClass={MaterialIcons}
        iconName={'search'}
        iconColor={'#f95a25'}
        iconSize={20}
        style={styles.SaeStyle}
        onChangeText={(text) => this.props.jobQueryChange(text)}
        autoCapitalize={'none'}
        autoCorrect={false}
        onSubmitEditing={this.onButtonPress}
      />
    );
  }
  renderOtherInput() {
    return (
      <View style={styles.inputStyle}>
        <FormLabel>Enter a Job</FormLabel>
        <FormInput onChangeText={(text) => this.props.jobQueryChange(text)} />
      </View>
    );
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>

          {this.renderInput()}
          <Button
            large
            title="Search this area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }
}

function mapStateToProps({ job }) {
  return { query: job.query };
}

export default connect(mapStateToProps, actions)(MapScreen);

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  SaeStyle: {
    backgroundColor: 'white',
    marginRight: 15,
    marginLeft: 15,
  },
  inputStyle: {
    backgroundColor: 'white',
    marginRight: 15,
    marginLeft: 15,
  },

};
