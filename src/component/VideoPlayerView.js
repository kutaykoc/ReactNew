import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import VideoPlayer from 'react-native-video-controls'
class VideoPlayView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <VideoPlayer 
                    source={{uri:'https://vjs.zencdn.net/v/oceans.mp4'}}
                    title={this.props.title}
                    onBack={()=>this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

export default VideoPlayView

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})