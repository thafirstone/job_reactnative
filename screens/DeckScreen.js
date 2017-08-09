import React, { Component } from 'react';
import { View, Text, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from './../components/Swipe';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

class DeckScreen extends Component {
      static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="database"
            size={26}
            style={{ color: tintColor }}
          />
        ),
      };
  state = { }
  // componentWillReceiveProps(nextProps) {
  //   console.log('mise à jour des props');
  //   console.log(nextProps.jobs);
  // }
  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    };
    const hauteur = Math.floor((SCREEN_HEIGHT * 5) / 7);
    return (
      <Card title={job.jobtitle} containerStyle={{ height: hauteur }}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            initialRegion={initialRegion}
            cacheEnabled={Platform.OS === 'android'}
          />
        </View>

        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}</Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title='No more jobs' />
    );
  }
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
};
function mapStateToProps({ job }) {
  return { jobs: job.results };
}
export default connect(mapStateToProps)(DeckScreen);

