/**
 Autor: kutaykoc
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import SideMenu from 'react-native-side-menu'
import Slide from './component/Slider'
import List from './component/List'
import Header from './component/Header'
import Menu from './component/Menu'
export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  updateMenu(isOpen){
    this.setState({isOpen})
  }
  render() {
    const {navigation}=this.props
    return (
      <View style={styles.container}>
        <SideMenu
          menu={<Menu />}
          isOpen={this.state.isOpen}
          onChange={(isOpen)=>this.updateMenu(isOpen)}
        >
          <Header navigation={navigation} toggle={this.toggle.bind(this)}/>
          <Slide />
          <List navigation={navigation}  />
          </SideMenu>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex:1
  }
});

