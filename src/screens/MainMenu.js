import React, { Component } from 'react';
import { 
  Tabs,
  Tab,
  Icon 
} from 'react-native-elements';

// Import the Components for the tabs vies
import Balance from './Balance';
import CalculationsScreen from './Calculations';
import AddCard from './AddCard';


export default class MainMenu extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'calculations',
    }
  }

  changeTab(selectedTab) {
    this.setState({
      selectedTab
    })
  }

  render() {
    const { selectedTab } = this.state;

    return ( 
      <Tabs>
        {/* This is for our cards balance */}
        <Tab
        selected={selectedTab === 'balance'}
        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='account-balance' size={33} />}
        onPress={() => this.changeTab('balance')}>
        <Balance />
        </Tab>
        {/* This is the calculator */}
        <Tab
        selected={selectedTab === 'calculator'}
        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='attach-money' size={33} />}
        onPress={() => this.changeTab('calculator')}>
        <CalculationsScreen />
        </Tab>
        {/* This is for adding a new cc */}
        <Tab
        selected={selectedTab === 'addcard'}
        renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='add-circle' size={33} />}
        onPress={() => this.changeTab('addcard')}>
        <AddCard />
        </Tab>
      </Tabs>
    );
  }
}