import React from 'react'
import { Image, Text} from 'react-native';
import {View} from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import styles from '../App.style.js';

export const ShowTavern =  props => {
    
    return (
        <View style={styles.taverncontainer}>
        
            
            <Image source={props.route.params.url} style={{ height:'50%', width:'100%', margin:10, alignSelf:'center', borderRadius:10}}/>
            
            <Text style={{fontSize:20, fontWeight:'bold', color:'#35424a'}}>Név: {props.route.params.name} | <Text style={{fontSize:16, fontStyle:'italic'}}>{props.route.params.altname}</Text></Text>
            
            
            <Text style={{fontSize:16, padding:2, color:'#35424a'}}><Text style={{fontWeight:'bold'}}>Tulajdonos:</Text> {props.route.params.owner}</Text>
            
            <Text style={{fontSize:16, padding:2, color:'#35424a'}}><Text style={{fontWeight:'bold'}}>Weboldal:</Text> <Hyperlink linkDefault={true} linkStyle={{color:'#f85f6a',fontSize:16}}>{props.route.params.website}</Hyperlink></Text>
            <Text style={{fontSize:16, padding:2, color:'#35424a'}}><Text style={{fontWeight:'bold'}}>Facebook:</Text> <Hyperlink linkDefault={true} linkStyle={{color:'#f85f6a',fontSize:16}}>{props.route.params.facebook}</Hyperlink></Text>
            <Text style={{fontSize:16, padding:2, color:'#35424a'}}><Text style={{fontWeight:'bold'}}>Cím:</Text> {props.route.params.addres}</Text>
            <Text style={{fontSize:16, padding:2, color:'#35424a'}}><Text style={{fontWeight:'bold'}}>Tel.:</Text> {props.route.params.phone}</Text>
            <Text style={{fontSize:16, padding:2, color:'#35424a'}}><Text style={{fontWeight:'bold'}}>Email:</Text> {props.route.params.email}</Text>
        
        </View>
    )
}