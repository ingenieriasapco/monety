import React, { Component } from 'react';

import {
  View,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';

import {
  FormLabel,
  FormInput,
  Button,
} from 'react-native-elements';

import style from '../components/styles';
import DB from '../models';

export default class AddCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardNumber: 0,
      currentBalance: 0,
    };

    this.sendForm = this.sendForm.bind(this);
  }

  sendForm() {
    const cardNumberLengthValue = this.state.cardNumber.toString().length;
    const cardNumberLength = this.state.cardNumber !== 0 ? cardNumberLengthValue : 0;

    const currentBalanceLengthValue = this.state.currentBalance.toString().length;
    const currentBalanceLength = this.state.currentBalance !== 0 ? currentBalanceLengthValue : 0;

    /**
     * We do not allow empty camps!
     */
    if (cardNumberLength >= 4 && currentBalanceLength !== 0) {
      const data = {
        number: parseInt(this.state.cardNumber),
        balance: parseInt(this.state.currentBalance),
      }
      DB.create('Card', data);
    } else {
      Alert.alert('Error', 'Sorry, We do not allow empty data!', [
        { text: 'OK', onPress: () => console.log('Ok') }
      ],
      { cancelable: false },
      );
    }
  }

  render() {
    const { height, width } = Dimensions.get('window');

    return (
      <View
        style={{ height: height * 0.8, paddingHorizontal: 30, paddingVertical: 10 }}
      >
        <View>
          <FormLabel labelStyle={style.styles.label}>Last four (4) digits of your card</FormLabel>
          <FormInput
            ref='cardNumber'         
            inputStyle={style.styles.card}
            keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
            placeholder='XXXX'
            value={ this.state.cardNumber }
            onChangeText={(cardNumber) => this.setState({ cardNumber })}
          />
        </View>
        <View>
          <FormLabel labelStyle={style.styles.label}>Current Balance</FormLabel>
          <FormInput
            ref='currentBalance'
            inputStyle={style.styles.card}
            keyboardType={ Platform.OS == 'ios' ? 'number-pad' : 'numeric' }
            placeholder='$'
            value={ this.state.currentBalance }
            onChangeText={(currentBalance) => this.setState({ currentBalance })}
          />
        </View>
        <View>
          <Button
          large
          backgroundColor='#053'
          icon={{name: 'done'}}
          title='SEND IT!'
          onPress={this.sendForm}
          />
        </View>
      </View>  
    );
  }
}