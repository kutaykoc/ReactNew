import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'
import { Platform } from 'react-native'
import { TabViewAnimated, TabBar ,TabViewPagerScroll, TabViewPagerPan } from 'react-native-tab-view'
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

    _renderPager = (props) => {
        return (Platform.OS === 'ios') ? <TabViewPagerScroll {...props} /> : <TabViewPagerPan {...props} />
       }

    _renderScene = ({ route }) => {
        const data=this.props.data;
        switch (route.key) {
            case '1':
                return  <Episodes episodes={data}/>;
            case '2':
                return <Trailers />;
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
                onIndexChange={this._handleIndexChange}
                renderPager={this._renderPager}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        borderTopWidth:2,
        borderColor:'black',    
        
    }
})

export default TabsEpisodes