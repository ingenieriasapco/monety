import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import db from '../models';
import CreditCard from '../components/card.js';

export default class CalculationsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      precioStr : '0',
      precioNum : 0,
      couta : 0,
    };
  }

  converToNumber (num){
    var x = parseInt( ( num + '' ).replace(/\./gim, '') );
    return _.isNaN(x) || x == 'NaN' ? 0 : x;
  }

  convertToString(num){
    var nums = ( this.converToNumber(num) + '' ).split('');
    var str = [];

    for (var i = nums.length - 1; i >= 0; i--) {
      str.push(nums[i])
      if(i % 3 === 0 && i > 1) {
        str.push('.');
      }
    }

    return str.join('');
  }

  putNumber (num){
    var precioNum = this.converToNumber(num);
    var precioStr = this.convertToString(num);
    this.setState({precioNum,  precioStr });
  }


  renderRow(data){
    return (
      <CreditCard typeCard="visa" name="holi122">
        <Text>Blas</Text>
      </CreditCard> );

  }
  render(){
    return (
    <View>
      <View>
        <Text style={style.label}>Valor</Text>
        <TextInput
          style={styles.numbers}
          onChangeText={(text) => this.putNumber(text)}
          value={this.state.precioStr}
        />
      </View>
      <View>
        <TextInput
          style={styles.numbers}
          placeholder="Coutas"
          onChangeText={(couta) => this.setState({couta})}
          value={this.state.couta}
        />
      </View>

    </View>);
    
  }
}

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
  numbers : {
    fontSize : 50,
    height : 50,
    paddingHorizontal : 10,
    textAlgin : 'right',
    borderColor: 'transparent',
    borderWidth: 1
  },
  label : {
    fontSize : 20,
  }
});