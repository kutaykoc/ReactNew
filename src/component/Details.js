import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
import TabsEpisodes from './TabsEpisodes'
import Episodes from './Episodes';
import TextGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get("window")
class Details extends Component {
    render() {
        const { episodes } = this.props.navigation.state.params.item.details
        const { name } = this.props.navigation.state.params.item
        const { thumbnail, cast, description, year, creator, numOfEpisodes, season } = this.props.navigation.state.params.item.details
        return (
            <ScrollView style={styles.container}>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Home")}>
                    <Icon
                        name="times-circle"
                        color="grey"
                        size={35}
                        style={styles.iconInputClose}
                    />
                </TouchableWithoutFeedback>
                <Image
                    source={{ uri: thumbnail }}
                    style={styles.thumbnail}
                >
                    <View style={styles.buttonPlay}>
                        <TouchableWithoutFeedback
                            onPress={null}
                        >
                            <View>
                                <Icon
                                    style={styles.iconPlay}
                                    name="play-circle"
                                    size={50}
                                    color="white"
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.nameContainer}>
                        <TextGradient colors={['transparent','#181818','#181818']}>
                            <Text style={[styles.text,styles.titleShow]}>{name}</Text>
                        </TextGradient>
                    </View>
                </Image>
                <View style={styles.descrptionContainer}>
                    <View style={styles.subtitle}>
                        <Text style={[styles.text, styles.subTitleText]}>{year}</Text>
                        <Text style={[styles.text, styles.subTitleText]}>{numOfEpisodes}</Text>
                        <Text style={[styles.text, styles.subTitleText]}>{season} Season</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={[styles.text, styles.light]}>{description}</Text>
                    </View>
                    <Text style={styles.text}>Cast: {cast}</Text>
                    <Text style={styles.text}>Creator: {creator}</Text>
                    <View style={styles.shareListIcons}>
                        <View style={styles.myListIcon}>
                            <IonIcons
                                name="md-checkmark"
                                style={styles.listIcon}
                                color="grey"
                                size={25}
                            />
                            <Text style={styles.text}>My List</Text>
                        </View>
                        <View style={styles.myShareIcon}>
                            <Icon
                                style={styles.shareIcon}
                                name="share-alt"
                                color="grey"
                                size={25}
                            />
                            <Text style={styles.text}>Share</Text>
                        </View>
                    </View>
                </View>
                <TabsEpisodes data={episodes} />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    thumbnail: {
        width: width,
        height: 250,
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    buttonPlay: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: "transparent"
    },
    descrptionContainer: {
        paddingHorizontal: 20,
    },
    subtitle: {
        flexDirection: 'row',
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: "#b3b3b3",
        fontSize: 16
    },
    shareListIcons: {
        flexDirection: 'row',
        marginVertical: 30,
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    description: {
        marginVertical: 10,
    },
    light: {
        fontWeight: '200'
    },
    iconInputClose:{
        position: "absolute",
        top: 5,
        right: 10,
        zIndex: 1
    },
    nameContainer:{
        backgroundColor:"transparent" 
    },
    titleShow:{
        fontSize:35,
        paddingLeft:10,
        paddingBottom:10
    }
})
export default Details