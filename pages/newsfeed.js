import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import News from './news';
import styles from '../App.style.js';



//TODO Átgondolni, hogy legyen e még valami a feedben a raideken kívül
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export const NewsFeed = ( props ) => { 
    return(
        <View style={styles.container}>
          <ScrollView>
            <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            
            {
            News.map((raid, index)=>(
                <TouchableOpacity key={index}
                    onPress=
                            {() => props.navigation.navigate
                            ('Raid', {url: raid.url, title: raid.title, content: raid.content, location: raid.location })}>

                <Image 
                    source={raid.url}
                    style={{height:deviceHeight/2, width:deviceWidth*0.95, borderRadius:10, margin:2}}
                />

                <Text style={{fontSize:20, fontWeight:'bold', color:'#35424a'}}>{raid.title}</Text>

                <Text style={{fontSize:16, color:'#FFFFFF'}}>{raid.content}</Text>
                
              </TouchableOpacity>  
             ))
            }
           
            
            </View>
          </ScrollView>
        </View>
    )
}