import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList,
  Alert, Pressable
} from 'react-native';

import styles from '../App.style.js';

export const TestPage = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  const [user_email, setUserEmail] = useState('');
  const [user_nick_name, setUserNickName] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [user_password_again, setUserPasswordAgain] = useState('');
  const [user_birthday_at, setUserBirthdayAt] = useState('');

  function processForm () {
    setIsLoading(true);
    callUserForgotPassword();
  }

  const callUserForgotPassword = async() => {
    try{
      await fetch(
        'https://theapp.artidas.hu/tavernraid/mobile/user/registration?nick_name='+ user_nick_name +'&email='+ user_email +'&password='+ user_password +'&password_again='+ user_password_again +'&birthday_at='+ user_birthday_at,
        {
          method: 'GET'
        }
      )
        .then(response => response.json())
        .then(console.log(data))
        .then(data => setData(data))
        .catch(error => console.log(error))
      ;

      setIsFetched(true);
    }
    catch(error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Elnézést, hiba történt... :(");
    }
    finally {
      setIsLoading(false);
    }
  }

  console.log(data);
  return (
    <React.Fragment>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail cím"
          onChangeText={(user_email) => setUserEmail(user_email)}
        />
        <TouchableOpacity
          style={styles.buttonInput}
          onPress={processForm}
        >
          <Text>Jelszóemlékeztető küldése</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {
          isLoading ?
            <ActivityIndicator/>
          :
              isFetched ?
                  <Text>{data.messages}</Text>
              :
                null
        }
      </View>
    </React.Fragment>
  );
}