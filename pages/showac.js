import React from 'react'
import { Image, Text} from 'react-native';
import {View} from 'react-native';
import styles from '../App.style.js';



export const ShowAc =  props => {
    
    return (
        <View style={styles.container}>
            <Image source={props.route.params.url} style={{ height:350, width:350, margin:10, alignSelf:'center', borderRadius:10}}/>
            <Text style={{fontSize:24, fontWeight:'bold', color:'#35424a'}} >{props.route.params.nev}</Text>
            <Text style={{fontSize:16, color:'#FFFFFF'}}>{props.route.params.description}</Text>
        </View>
    )
}