import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, StyleSheet, Linking } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, Button as ElementsButton } from 'react-native-elements';

const renderHeaderV1 = (navigation) => (
  <MaterialCommunityIcons.Button
    name="account-settings-variant"
    style={{ backgroundColor: '#009688' }}
    onPress={() => navigation.navigate('settings')}
  />
);

const renderHeaderV2 = (navigation) => (
  <ElementsButton
    backgroundColor='rgba(0,0,0,0)'
    color='rgba(255, 255, 255, 1)'
    title="Settings"
    onPress={() => navigation.navigate('settings')}
  />
);

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Favorites',
    headerRight: renderHeaderV2(navigation),
    // headerStyle: {
    //   // marginTop: Platform.OS === 'android' ? 24 : 0,
    // },
    tabBarIcon: ({ tintColor }) => (
      <MaterialCommunityIcons
        name="heart"
        size={26}
        style={{ color: tintColor }}
      />
    ),

  });
  state = { }
  componentWillReceiveProps(nextProps) {
    console.log('reception de new données');
    console.log(nextProps.likeJobs);
  }
  renderLikedJobs() {
    return (
      this.props.likeJobs.map((job) => {
        const { longitude, latitude, company, formattedRelativeTime, url, jobkey, jobtitle } = job;
        const initialRegion = {
          longitude,
          latitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.02,
        }; return (
          <Card key={jobkey} title={jobtitle}>
            <View style={{ height: 200 }}>
              <MapView
                scrollEnabled={false}
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                cacheEnabled={Platform.OS === 'android'}
              />
              <View style={styles.detailWrapper}>
                <Text style={styles.italics}>{company}</Text>
                <Text style={styles.italics}>{formattedRelativeTime}</Text>
              </View>
              <ElementsButton
                title='Apply Now!'
                backgroundColor='#27ae60'
                onPress={() => Linking.openURL(url)}
              />
            </View>
          </Card>
        );
      }
      )
    );
  }
  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}
function mapStateToProps({ likeJobs }) {
  return { likeJobs };
}

export default connect(mapStateToProps)(ReviewScreen);

const styles = StyleSheet.create({
  settingsButton: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  detailWrapper: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  italics: {
    fontStyle: 'italic',
  },
});
