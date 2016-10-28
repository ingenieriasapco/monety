import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';
import db from '../models';
import CreditCard from '../components/card.js';


export default class CalculationsScreen extends Component {

  renderList(){
    return (
    <View>
      <View>
        <Text>Valor</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
      <View>
        <Text>Coutas</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>


      <ListView
        dataSource={this.state.listCards}
        renderRow={data => this.renderCard(data)} />
      <Button
        icon={{name: 'cached'}}
        title='Agregar '
        onPress={()=> this.setState({ openNew : true }) }/>
    </View>);
  }


  renderRow(data){
    return (
      <CreditCard typeCard="visa" name="holi122">
        <Text>Blas</Text>
      </CreditCard> );

  }

  render(){
    return
    <CreditCard typeCard="visa" name="holi122">
      <Text>Blas</Text>
    </CreditCard>
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