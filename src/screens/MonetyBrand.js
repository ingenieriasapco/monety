import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Text,
} from 'react-native';


export default class MonetyBrand extends Component {
  render() {
 
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../img/LogoMonetyResized.png')}
          />
        </View>
        {/* Se hará render de el navbar menu! */}
        {this.props.children} 
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height * 0.15,
    backgroundColor: '#053',
    width,
    justifyContent: 'center',
    alignItems: 'center',

  },
  mainContainer: {
    backgroundColor: 'rgb(245, 245, 245)',
    height: height * 0.85,
  },
})