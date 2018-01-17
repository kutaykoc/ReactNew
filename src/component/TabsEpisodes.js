import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import Episodes from './Episodes'
import Trailers from './Trailer'
class TabsEpisodes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Episodes' },
                { key: '2', title: 'Trailer & More' }
            ]
        }
    }
    _handleIndexChange = index => this.setState({ index })

    _renderHeader = props => <TabBar {...props} /> 
    
    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return  <View style={{ height:48, flex: 1, backgroundColor: 'red', zIndex:1}} />;/*(<Episodes episodes={this.props.data}/>);*/
            case '2':
                return <View style={{ height:48, flex: 1, backgroundColor: 'blue', zIndex:1}} />/*(<Trailers />);*/
            default :
                return null;
        }
      }
    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene.bind(this)}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        borderTopWidth:2,
        borderColor:'black',
        height:250
    }
})

export default TabsEpisodes