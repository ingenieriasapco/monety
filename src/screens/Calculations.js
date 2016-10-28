import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  ListView
} from 'react-native';

import db from '../models';
import CreditCard from '../components/card.js';
import _ from 'lodash';

export default class CalculationsScreen extends Component {
  constructor(props){
    super(props);
    this.cards = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      precioStr : '',
      precioNum : 0,
      couta : 0,
      cards : this.cards.cloneWithRows( db.list('Card') )
    };
  }

  converToNumber (num){
    var x = parseInt( ( num + '' ).replace(/\./gim, '') );
    return _.isNaN(x) || x == 'NaN' ? 0 : x;
  }

  convertToString(num){
    var nums = ( this.converToNumber(num) + '' ).split('').reverse();
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
    // Aqui hacer los calculos
    return (
      <CreditCard typeCard={data.type} name={data.name}>
        <Text>Blas</Text>
      </CreditCard>
    );
  }

  render(){
    return (
    <View>
      <View>
        <Text style={styles.label}>Valor</Text>
        <TextInput
          style={[styles.numbers, Platform.OS == 'ios' ? { height : 50 } : { height : 75 } ]}
          placeholder="120.000"
          keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
          onChangeText={(text) => this.putNumber(text)}
          value={this.state.precioStr}
        />
      </View>
      <View>
        <Text style={styles.label}>Couta</Text>
        <TextInput
          style={[styles.numbers, Platform.OS == 'ios' ? { height : 50 } : { height : 75 } ]}
          keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
          placeholder="12"
          onChangeText={(couta) => this.setState({couta})}
          value={this.state.couta}
        />
      </View>
      <ListView
          dataSource={this.state.cards}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
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
    paddingHorizontal : 10,
    paddingTop : 1,
    paddingBottom : 5,
    textAlign : 'right',
    borderColor: 'transparent',
    borderWidth: 1
  },
  label : {
    fontSize : 20,
  }
});