import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import db from '../models';
import { ListView } from 'realm/react-native';
import {
  Button
} from 'react-native-elements'

export default class CreditCardScreen extends Component {
  constructor(data){
    super(data);
    this.cards = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      nameCard : '',
      taxCard : 0,
      maxMountCard : 0,
      openNew : false,
      listCards : this.ds.cloneWithRows(db.objects('Card'))
    };
  }

  addCard(){
    db.write(() => {
      db.create('card', {
        name : this.state.nameCard,
        tax : this.state.taxCard,
        maxMount : this.state.maxMountCard,
      });
      this.setState({
        openNew : false,
        listCards : this.cards.cloneWithRows(db.objects('Card')),
        nameCard : '',
        taxCard : 0,
        maxMountCard : 0,
      });
    });
  }

  renderCard(data){

    return 
  }

  renderNewCard (){

    return
  }

  renderList(){


    return ( <View>
      <ListView
        dataSource={this.state.listCards}
        renderRow={data => this.renderCard(data)} />
      <Button
        icon={{name: 'cached'}}
        title='BUTTON WITH ICON'
        onPress={()=> this.setState({ openNew : true }) }/>
      </View>);
  }

  render() {
    return {this.state.openNew ? this.renderNewCard() : this.renderList() };  
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});