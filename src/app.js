import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Main from './screens/Main';

/*import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import FacebookTabBar from './components/FacebookTabBar';
import CalculationsScreen from './screens/Calculations';
import ReminderScreen from './screens/Reminder';
import CreditCardScreen from './screens/CreditCard';
import UserScreen from './screens/User'; */

export default class App extends Component {
  /*render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={1}
      renderTabBar={() => <FacebookTabBar />}
      >
        <ScrollView tabLabel="logo-usd" style={styles.tabView}>
          <CalculationsScreen />
        </ScrollView>
        <ScrollView tabLabel="ios-card" style={styles.tabView}>
          <CreditCardScreen />
        </ScrollView>
        <ScrollView tabLabel="ios-calendar" style={styles.tabView}>
          <ReminderScreen />
        </ScrollView>
        <ScrollView tabLabel="ios-person" style={styles.tabView}>
          <UserScreen />
        </ScrollView>
    </ScrollableTabView>;
  }*/

  render() {
    return (
      <View>
        <Main>
          <Text>fasdfasdfsadfsafasdfasdf</Text>
        </Main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
});

