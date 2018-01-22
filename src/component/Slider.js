import React, {Component} from 'react'
import{
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native'

import Swiper from 'react-native-swiper'

const {height,width}=Dimensions.get('window')

const Slider=props=>(
    <View style ={styles.container} >
        <Image resizeMode="stretch" style={styles.image} source={props.uri}/>
    </View>
)

const styles={
    container:{
       
        flex:1,
        justifyContent:'center'
    },
    image:{
        flex:1,
        width
    }
}

export default class extends Component {
    constructor(props){
        super(props)
        this.state={
            imagesSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg')
            ]
        }
    }
    render(){
        return(
            <View style={styles.container} >
                <Swiper
                    autoplay
                    
                >
                {
                    this.state.imagesSlider.map((item,i)=> <Slider
                        uri={item}
                        key={i}
                        />)

                }
                </Swiper>
            </View>
        )
    }
}
