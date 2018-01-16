/**
 Autor: kutaykoc
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


import List from './component/List' 
export default class App extends Component {
 
  
  render() {
    return (
      <View style={[{flex:1},styles.container]}>
          <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black"
  }
});
