import KeyboardSpacer from 'react-native-keyboard-spacer';
import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Fumi } from 'react-native-textinput-effects';

import * as actions from '../actions';

class MapScreen extends Component {
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
      this.props.navigation.navigate('deck');
    });
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
          />
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

};
