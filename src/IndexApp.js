import React,{Component} from 'react-native';

import { StackNavigator } from "react-navigation";
import App from './App'
import Search from './component/Search'
const reactNavigationSample = props => {
    return <App navigation={props.navigation} />;
  };
  
  reactNavigationSample.navigationOptions = {
    title: "Home Screen"
  };

  export default const IndexApp = StackNavigator({
    Home: { screen: reactNavigationSample },
    SecondScreen: { screen: Search, title: "Second Screen" }
  });

