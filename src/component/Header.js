import React from 'react'
import{
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    TouchableNativeFeedback
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

const Header=(props)=>{
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={()=>props.toggle()}>
            <Icon 
                name ="bars"
                color="white"
                size={25}
            />
        </TouchableWithoutFeedback >
        <Image style={styles.logo} source={require('../images/Netflix-logo.png')}/>
        <TouchableWithoutFeedback onPress={()=>props.navigation.navigate("Search")}>
        <Icon 
            name="search"
            color="white"
            size={25}
        />
        </TouchableWithoutFeedback>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        height:60,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'black',
        paddingHorizontal:15
    },
    logo:{
        width:120,
        height:40
    }
})
export default Header