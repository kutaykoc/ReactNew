import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Episodes extends Component {
    _renderEpisodes() {
        const res = this.props.episodes.map((item, i) => {
            const img=item.image==null?'https://static.tvmaze.com/uploads/images/medium_landscape/70/176097.jpg': item.image.medium
            return (
                <View style={styles.video} key={i}>
                    <View style={styles.videoEpisode}>
                        <Image style={styles.image} source={{uri:img}}>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View style={{backgroundColor:"transparent"}}>
                                        <Icon
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </Image>
                        <View style={styles.episodeName}>
                            <Text style={styles.text}>{item.number}. {item.name}</Text>
                            <Text style={styles.text}>{item.runtime} min</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}> {item.summary}</Text>
                </View>
            )
        });
        return res
    }
    render() {
        
        return (
            <View style={styles.container}>
                    {this._renderEpisodes()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       marginHorizontal:10,
       flex:1
    },
    episodeName:{
        justifyContent:"center"
    },
    image:{
        width:150,
        height:80,
        marginRight:10
    },
    buttonPlay:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    videoEpisode:{
        flexDirection:"row",
    },
    text:{
        color:"white"
    },
    summary:{
        color:"grey",
        marginVertical:10
    }
})