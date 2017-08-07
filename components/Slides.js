import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {
  state = { }
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          containerViewStyle={styles.transparentStyle}
          buttonStyle={styles.buttonStyle}
          icon={{ name: 'check', type: 'font-awesome' }}
          title='On y va'
          raised
          onPress={() => this.props.onComplete()}
        />
      );
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => (
      <View style={[styles.slideStyle, { backgroundColor: slide.color }]} key={slide.id}>
        <Text style={styles.slideText}>{slide.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    ));
  }
  render() {
    return (
      <ScrollView
        style={styles.defaut}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
        centerContent
        indicatorStyle={'white'}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  defaut: {
    // backgroundColor: '#1abc9c',
    // flex: 1,
  },
  slideText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  buttonStyle: {
    backgroundColor: '#7f8c8d',
    marginTop: 30,
  },
  transparentStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});
