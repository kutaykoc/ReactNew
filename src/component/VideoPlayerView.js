import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    WebView
} from 'react-native'
import VideoPlayer from 'react-native-video-controls'
class VideoPlayView extends Component{
    render(){
        return (
            <WebView
              source={{uri: 'https://www.youtube.com/watch?v=j76hKv57CNA'}}
              style={{flex:1,alignItems: 'center',marginTop: 20}}
              
            />
        )
    }
}

export default VideoPlayView

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})

/*
<VideoPlayer 
                    source={ require('../videos/video.mp4')/*uri:'https://www.youtube.com/watch?v=1WtL1rNOLcg'*///}
 //                   title={this.props.title}
 //                   disableBack={false}
//                      domStorageEnabled={true}
 //                   disableVolume={false}
  //                  onBack={()=>this.props.navigation.navigate('Home')}
  //              />