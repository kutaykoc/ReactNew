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

import Slide from './component/Slider'
import List from './component/List' 
import Header from './component/Header'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
        isOpen:false
    }
}
toggle(){
    this.setState({
        isOpen:!this.state.isOpen
    })
}
  render() {
    return (
      <View style={[{flex:1},styles.container]}>
          <Header/>
          <Slide />
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
