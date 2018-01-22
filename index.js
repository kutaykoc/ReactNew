import React,{Component} from 'react';
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import App from './src/App'
import Search from './src/component/Search'
import Details from './src/component/Details'
import Video from './src/component/VideoPlayerView'
import Nothice from './src/component/Nothice'
class reactNavigationSample extends Component {
    static navigationOptions = {
      title: 'Home Screen',
      
    };
  
    render(){
        const { navigation } = this.props;
      return (
        <App navigation={ navigation }/>
      );
    }
  }

const SimpleApp = StackNavigator({
    Home: { screen: reactNavigationSample },
    Search: { screen: Search, title: "Second Screen" },
    Details:{screen:Details,title:"details page"},
    Video :{screen:Video,title:"Video Player"},
    Nothice :{screen:Nothice,title:"Nothice Screen"}
  },
  { mode: 'modal',
  headerMode:'none'
}
);


AppRegistry.registerComponent('ReactNew', () => SimpleApp);
