import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from '../App.style.js';


export const LoginPage = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [show,setShow]= React.useState(false);
  const [visible,setVisible]= React.useState(true);

  let form_data = new FormData();

  function processForm () {
    setIsLoading(true);
    form_data.append('email', user_email);
    form_data.append('password', user_password);
    form_data.append('login', 'Bejelentkezés');
    callUserLogin();
  }

  const callUserLogin = async() => {
    try{
      const response = await fetch(
        'https://theapp.artidas.hu/tavernraid/mobile/user/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
         // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form_data
      });
      const data = await response.json();
      console.log(data);
      console.log(data.messages[1]);
      setData(data);
      setIsFetched(true);
      if(data.messages.includes('Sikeres bejelentkezés.')){
        navigation.navigate('Home');
      }
      
    }
    catch(error) {
      setIsLoading(false);
      console.log(error);
      alert("Elnézést, hiba történt... :(");
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>

        <Text style={styles.titleText} >Bejelentkezés</Text>

        <View style={styles.form_input}>

          <TextInput
              style={styles.textInput}
              placeholder="E-mail cím"
              placeholderTextColor={'#d1d6db'}
              onChangeText={(user_email) => setUserEmail(user_email)}
          />

          <TextInput
            style={styles.textInput}
            secureTextEntry={visible}
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
            placeholder="Jelszó"
            placeholderTextColor={'#d1d6db'}
            autoComplete="password"
            onChangeText={(user_password) => setUserPassword(user_password)}
          />

          <TouchableOpacity 
            style={styles.btnEye}
            onPress=
              {
                () => {
                        setVisible(!visible);
                        setShow(!show);
                      }
              }
          >
            <MaterialCommunityIcons
              name={show === false ? 'eye-outline': 'eye-off-outline'}
              size={26}
              color={'rgba(255,255,255,0.7)'}
            />
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.buttonInput}
        onPress={processForm}
        >
          <Text 
            style={{color:'#ebebeb', fontSize:17, fontWeight: 'bold',}}
          >
            Bejelentkezés
          </Text>
        </TouchableOpacity>

        <View style={styles.container}>
        {
          isLoading ?
            <ActivityIndicator/>
          :
              isFetched ?
                  <Text>{data.errors}</Text>
              :
                null
        }
      </View>

        <TouchableOpacity
          style={styles.link}
          onPress={ () => navigation.navigate('Elfelejtett jelszó') }
        >
          <Text>Elfelejtett jelszó?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={ () => navigation.navigate('Regisztráció') }
        >
          <Text >Nincs fiókod?
            <Text 
              style={{color:'#f4eb49', fontWeight:'bold'}}
            > 
            Regisztráció
            </Text>
          </Text>
        </TouchableOpacity>
    </View>
  );
};