import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import styles from '../App.style.js';

export const RegisterPage = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState([]);
  const [user_nick_name, setUserNickName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [user_password_again, setUserPasswordAgain] = useState('');
  const [user_birthday_at, setUserBirthdayAt] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Születési év');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  
  
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[0] + "/" + x1[1] + "/" + x1[2]);
    setSelectedDate(x1[0] + "-" + x1[1] + "-" + x1[2])
    setUserBirthdayAt(x1[0] + "-" + x1[1] + "-" + x1[2]);
    hideDatePicker();
  };

  const [show,setShow]= React.useState(false);

  let form_data = new FormData();

  function processForm () {
    setIsLoading(true);
    form_data.append('nick_name', user_nick_name);
    form_data.append('email', user_email);
    form_data.append('password', user_password);
    form_data.append('password_again', user_password_again);
    form_data.append('birthday_at', user_birthday_at);
    form_data.append('registration', 'Regisztrálás');
    callUserRegistration();
  }

  const callUserRegistration = async() => {
    try{
      const response = await fetch(
        'https://theapp.artidas.hu/tavernraid/mobile/user/registration',{
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
         // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form_data
      });
      const data = await response.json();
      console.log(data);
      setData(data);
      setIsFetched(true);
      if(data.messages.includes('The registration was successful!')){
        navigation.navigate('Bejelentkezés');
      }
      
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
  
  

  const [visible,setVisible]= React.useState(true);
 function getDatePicker (Platform) {
  if(Platform.OS === 'ios'){
    return(
      <TextInput
      style={styles.textInput}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Születési év"
      placeholderTextColor={'#d1d6db'}
      onChangeText={(user_birthday_at) => setUserBirthdayAt(user_birthday_at)}
      />
    )
  }
  else{
      return(
        <View style={{width: '100%'}}>
        <TouchableOpacity 
        style={{ 
          width: '90%',
           height: 40,
           borderWidth: 1,
           borderRadius: 2,
           borderColor:'#7579a5',
           margin:5,
           paddig:5,
           borderBottomColor:'#FFFFFF',
           justifyContent: 'center', 
           alignItems: 'center', 
           margin: 10,
           marginLeft:15
                }} 
        onPressIn={showDatePicker} >
          <Text onChangeText={(user_birthday_at) => setUserBirthdayAt(user_birthday_at)}>{selectedDate}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        </View>
      )
  }

 }


  return (
    <View style={styles.container}>
      <Text style={styles.titleText} >Regisztráció</Text>
      <View style={styles.form_input}>
      <TextInput
        style={styles.textInput}
        placeholder="Név"
        placeholderTextColor={'#d1d6db'}
        onChangeText={(user_nick_name) => setUserNickName(user_nick_name)}
      />
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
      <TextInput
        style={styles.textInput}
        secureTextEntry={visible}
        autoCapitalize="none"
        autoCorrect={false}
        enablesReturnKeyAutomatically
        placeholder="Jelszó újra"
        placeholderTextColor={'#d1d6db'}
        autoComplete="password"
        onChangeText={(user_password_again) => setUserPasswordAgain(user_password_again)}
      />
       <TouchableOpacity style={styles.btnEye2}
        onPress={
          () => {
            setVisible(!visible);
            setShow(!show);
          }
        }>
        <MaterialCommunityIcons
        name={show === false ? 'eye-outline': 'eye-off-outline'}
        size={26}
        color={'rgba(255,255,255,0.7)'}
        />
        </TouchableOpacity>
      </View>
      {getDatePicker(Platform)}
      
      <Text></Text>
      <TouchableOpacity style={styles.buttonInput}
      onPress={processForm}>
      
       
        <Text style={{color:'#ebebeb', fontSize:17, fontWeight: 'bold'}}>Regisztráció</Text>
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
    </View>
  );
};