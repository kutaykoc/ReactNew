import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Nothice extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Bildirimler</Text>
            </View>
        )
    }
}

export default Nothice

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})