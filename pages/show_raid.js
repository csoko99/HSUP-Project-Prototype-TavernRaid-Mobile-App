import React from 'react'
import { ImageBackground, Dimensions, Image, Text} from 'react-native';
import {View} from 'react-native';
import styles from '../App.style.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';



//TODO: A Rait title karakterszámának lekorlátozása
//TODO: A gombra megírni, hogy a current locationjétől tervezzen egy útvonalat a kocsmához
//TODO: Megcsinálni a Raid jelentkező gonbot/rendszert
export const ShowRaid =  props => {
    
    return (
        <View style={styles.container}>
            <Image source={props.route.params.url} style={{ height:'70%', width:'100%', margin:10, alignSelf:'center', borderRadius:10}}/>
            

            <TouchableOpacity  
                style={styles.btnMarker}
                onPress={() => props.navigation.navigate("Térkép")}
            >
                    <Text >{props.route.params.location}</Text>
                    <MaterialCommunityIcons
                    name='map-marker'
                    size={20}
                    />
            </TouchableOpacity>
            
            <Text style={{fontSize:20, fontWeight:'bold', color:'#35424a'}} >{props.route.params.title}</Text>
            <Text style={{fontSize:16, color:'#FFFFFF'}}>{props.route.params.content}</Text>
        </View>
    )
}