
import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  render() {
    return <LottieView source={require('../styles/83026-loader-animation.json')} autoPlay loop />;
  }
}
