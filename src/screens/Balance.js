import React, { Component } from 'react';
import { Text } from 'react-native';

// Import elements from react-native-elements
import {
  List,
  ListItem,
} from 'react-native-elements';

import DB  from '../models';
import { ListView } from 'realm/react-native';

export default class Balance extends Component {
  constructor(props) {
    super(props);

    this.state = {
     card: []
    }
    //this.changeState = this.changeState.bind(this);
  }

  changeState(data) {
    this.setState({
      card: data
    }, () => {
      console.log(this.state.card)
    });
    
  }

  componentDidMount() {
    // getting the data from Realm
    const obj = DB.read('Card');
    const data = [];
    obj.map((el, i) => {
      data.push(
        {
          cardNumber: el.number,
          currentBalance: el.balance,
        }
      )  
    })
    this.changeState(data);
  }


  render() {
    return (
      this.state.card.map((element, index) => {
        <Text>Hola</Text>
      })
    );  
  }
}  