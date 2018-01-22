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
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import shows_first from '../data.json'

const shows_second=[
    {
        "key":8,
        "name":"The Walking Dead",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg"
     },
     {
        "key":9,
        "name":"Taken",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg"
     },
     {
        "key":10,
        "name":"This is us",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg"
     },
     {
        "key":11,
        "name":"Superstore",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg"
     },
     {
        "key":12,
        "name":"Lethal Weapon",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg"
     },
     {
        "key":13,
        "name":"The 100",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg"
     },
     {
        "key":14,
        "name":"Homeland",
        "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg"
     }
]

export default class List extends Component {
  SayfaGit(item){
    this.props.navigation.navigate("Details",{item:item})
  }
  _renderItem(item){
    return(
       <TouchableWithoutFeedback onPress={()=>this.SayfaGit(item)}>
          <Image style={{width:120,height:180}} source={{uri:item.image}}/>
       </TouchableWithoutFeedback>
    )
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
            <Text style={styles.text}>My List</Text>
            <FlatList 
            horizontal
            ItemSeparatorComponent={()=><View style={{width:20}}></View>}
            renderItem={({item})=>this._renderItem(item)}
            data={shows_first}
            />
        </View>
        <View>
            <Text style={styles.text}>For You</Text>
            <FlatList 
            horizontal
            ItemSeparatorComponent={()=><View style={{width:20 }}></View>}
            renderItem={({item})=>this._renderItem(item)}
            data={shows_second}
            />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },
  text: {
    color:"white"
  }
});
