import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Episodes extends Component {
    _renderEpisodes() {
        const res = this.props.episodes.map((item, i) => {
            return (
                <View style={styles.vide} key={i}>
                    <View style={styles.videoEpisode}>
                        <Image>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View>
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
                        <View>
                            <Text>{item.number}. {item.name}</Text>
                            <Text>{item.runtime}</Text>
                        </View>
                        <Text style={styles.summary}> {item.summary}</Text>
                    </View>
                </View>
            )
        });
        return res
    }
    render() {
        return (
            <View>
                {this._renderEpisodes}
            </View>
        )
    }
}

const styles = StyleSheet.create({

})