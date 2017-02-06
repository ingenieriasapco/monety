import React, { Component } from 'react';
import { Text, View } from 'react-native';

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
     cards: []
    }
  }

  changeState(data) {
    this.setState({
      cards: data
    }, () => {
      // Callback executed for sync statechange
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

  WholeCards() {
    // Iterate the information
    return this.state.cards.map(function(news, index){
      return(
        <ListItem
          key={index}
          title={`(${news.cardNumber}) has $ ${news.currentBalance}`}
        />
      );
    });
  }


  render() {
    return (
      <List>
        {this.WholeCards()}
      </List>
    );  
  }
}  