import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './App.style.js';


import { LoginPage } from './pages/login.js';
import { RegisterPage } from './pages/register.js';
import { HomePage} from './pages/home.js';
import { ForgotPasswordPage } from './pages/forgot_password.js';
import { ProfilePage } from './pages/profile.js';
import { TestPage } from './pages/test.js';
import { Map } from './pages/map.js';
import { ShowAc } from './pages/showac.js';
import { NewsFeed } from './pages/newsfeed.js';
import { ShowRaid } from './pages/show_raid.js';
import { ShowTavern} from './pages/show_tavern.js';
import { TavernGallery } from './pages/tavern_galery.js';


const Stack = createNativeStackNavigator();

const NavigationTheme = {
  dark: false,
  colors: {
    primary: '#ccc',
    background: '#ccc', // Not the actual background...
    card: '#ccc', // Background color of the header
    text: '#333',
    border: '#000',
    notification: '#000',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          //header: () => null,
          contentStyle: { backgroundColor: '#fff' },
        }}
      >
      
      <Stack.Screen
          name="Bejelentkezés"
          component={ LoginPage }
          options={{
            title: 'Bejelentkezés'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />

      <Stack.Screen
          name="Home"
          component={ HomePage }
          options={{
            title: 'TavernRaid'
          }}
        />

        <Stack.Screen
          name="Newsfeed"
          component={ NewsFeed }
          options={{
            title: 'Hírek'
          }}
        style={styles.element}
          theme={NavigationTheme}
        />
        
        <Stack.Screen
          name="Regisztráció"
          component={ RegisterPage }
          options={{
            title: 'Regisztráció'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Elfelejtett jelszó"
          component={ ForgotPasswordPage }
          options={{
            title: 'Elfelejtett jelszó'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Profil"
          component={ ProfilePage }
          options={{
            title: 'Profil'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Teszt"
          component={ TestPage }
          options={{
            title: 'Teszt'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
         <Stack.Screen
          name="Térkép"
          component={ Map }
          options={{
            title: 'Térkép'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Teljesítmény"
          component={ ShowAc }
          options={{
            title: 'Teljesítmény'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Kocsma"
          component={ ShowTavern }
          options={{
            title: 'Vendéglátó egység'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Vendéglátó egységek"
          component={ TavernGallery }
          options={{
            title: 'Vendéglátó egységek'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
        <Stack.Screen
          name="Raid"
          component={ ShowRaid }
          options={{
            title: 'Raid'
          }}
          style={styles.element}
          theme={NavigationTheme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;