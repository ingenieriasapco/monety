import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Text,
} from 'react-native';

import Calculations from '../screens/Calculations'

export default class MainComponent extends Component {
  render() {
    const { height, width } = Dimensions.get('window');
    
    return (
      <View>
        <View style={styles.header}>
          <Image source={require('../../img/LogoMonetyResized.png')}
          />
        </View>
        <View
          style={{ height: height * 0.8 }}
        >
          <Calculations />
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: '#AAA' }}>Hecho por Súper Poderosos</Text>
        </View>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    height: height * 0.14,
    backgroundColor: '#053',
    width,
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {
    backgroundColor: '#DFDFDF',
    flex: 1,
    width: width * 0.8,
  },
})