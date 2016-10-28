import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import db from '../models';
import FoldComponent from '../components/Fold';

const Base = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ height: 100, backgroundColor: 'grey' }}
      onPress={() => props.toggle()}
    >
      <Text>Tarjeta {props.text}</Text>
    </TouchableOpacity>
  );
}

const Show = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ height: 100, backgroundColor: 'grey' }}
      onPress={() => props.toggle()}
    >
      <Text>Mostrar {props.text}</Text>
    </TouchableOpacity>
  );
}

export default class CreditCardScreen extends Component {
  toggleFold() {
    this.fold.toggle();
  }

  render() {
    return (
      <View style={styles.card}>
        <Text>Credit Card Screen</Text>
        <FoldComponent
          ref={(fold) => { this.fold = fold; } }
          BaseComponent={<Base text="Visa" toggle={this.toggleFold.bind(this)} />}
          ShowComponent={<Show text="Couta, etc" toggle={this.toggleFold.bind(this)} />}
        />
      </View>
    );  
  }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});