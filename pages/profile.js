import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView, Dimensions } from 'react-native';
import Achievements from './achievements';
import styles from '../App.style.js';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
const images = [
  "https://www.shutterstock.com/image-photo/carefree-teenage-girl-friends-dancing-600w-2254114339.jpg",
  "https://media.npr.org/assets/img/2022/11/04/gettyimages-1183414292-1-_slide-edff8c3fe6afcab5c6457e3c7bd011f5c1745161-s1100-c50.jpg",
  "https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg?w=2000"
]


export const ProfilePage = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const callProfile = async () => {
      try {
        const response = await fetch('https://theapp.artidas.hu/tavernraid/mobile/user/profile');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    callProfile();
  }, []);


  const [imgActive, setimgActive] = useState(0);
  onchange = (nativeEvent) => {
    if(nativeEvent)
    {
      const slide= Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if(slide !=imgActive)
      {
        setimgActive(slide);
      }
    }
  }
  return (
    <View style={styles.container}>

      {!data ? (
         <Text>Loading...</Text>
        ):(
        <View>
      <ScrollView >
        <View style={{padding:10, width:'100%', backgroundColor:"#7fe1ad", height:150, borderRadius:5}}>
          <TouchableOpacity>
            <Image source={require('../kepek/placeholder-image.png')} style={{width:'100%', height:150, }}>
            </Image>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity>
            <Image source={require('../kepek/logo.jpg')} style={{width:100, height:100, borderRadius:100, marginTop:-110}}>
            </Image>
          </TouchableOpacity>
          <Text style={{fontSize:24, fontWeight:'bold', color:'#35424a'}}>{data.payload.nick_name}</Text>
          <Text style={{fontSize:16, color:'#555555'}}>{data.payload.email}</Text>
        </View>
        <View>
          <Text style={{fontSize:18, color:'#35424a', fontWeight:'bold', margin:10, marginTop:40}}>Momentumok:</Text>
          <SafeAreaView style={styles.carousel}>
            <View style={styles.wrap}>
              <ScrollView
              onScroll={({nativeEvent})=>onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              paddingEnabled
              horizontal
              style={styles.wrap}
              >
                {
                  images.map((e, index)=>
                    <Image
                      key={e}
                      resizeMode='stretch'
                      style={styles.wrap}
                      source={{uri: e}}
                    />
                  )
                }
               
              </ScrollView>
              <View style={styles.wrapDots}>
                {
                images.map((e, index)=>
                  <Text
                  key={e}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                  >
                    ●
                  </Text>
                )}
              </View>
            </View>
          </SafeAreaView>
          <ScrollView>
          <Text style={{fontSize:18, color:'#35424a', fontWeight:'bold', margin:10, marginTop:10}}>Teljesítmények:</Text>
          <View style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            
            {
            Achievements.map((image, index)=>(
              <TouchableOpacity key={index}
               onPress=
                {() => props.navigation.navigate('Teljesítmény', {url: image.url, nev: image.nev, description: image.description })}>
                <Image source={image.url}
                  style={{height:50, width:deviceWidth/6, borderRadius:10, margin:2}}
                />
              </TouchableOpacity>
            ))
            }
          </View>
          </ScrollView>
        </View>
      </ScrollView>
      </View>
    ) }
    </View>
  );
  
  
};
