import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions } from 'react-native';
import Taverns from './taverns.js';
import styles from '../App.style.js';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export const TavernGallery = (props) => {
    return(
        
        <ScrollView style={{ backgroundColor: '#7579a5'}}>
          <Text style={{fontSize:26, color:'#35424a', fontWeight:'bold', margin:10, marginTop:10}}>Vendéglátó egységek:</Text>
          <View style={styles.container2}>
            {
            Taverns.map((tavern, index)=>(
              <TouchableOpacity key={index}
              
               onPress=
                {() => props.navigation.navigate('Kocsma', {url: tavern.pics, name:tavern.name, altname:tavern.altname, owner:tavern.owner, website:tavern.website, facebook:tavern.facebook, addres:tavern.addres, phone:tavern.phone, email:tavern.email })}>
                <Image source={tavern.pics}
                  style={{height:(deviceHeight/3)-12, width:(deviceWidth/2)-4, borderRadius:10, margin:2, padding:2}}
                />
                <Text style={{fontSize:20, fontWeight:'bold'}}>{tavern.name}</Text>
              </TouchableOpacity>
            ))
            }
          </View>
          </ScrollView>
        
    )
}