import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import MonetyBrand from './screens/MonetyBrand';
import MainMenu from './screens/MainMenu';

export default class App extends Component {

  render() {
    return (
      /**
       * Render de las tabs
       * Por default vamos a renderizar la vista de la Calculadora
       */
      <MonetyBrand>
        <MainMenu />
      </MonetyBrand>
    );
  }
}
