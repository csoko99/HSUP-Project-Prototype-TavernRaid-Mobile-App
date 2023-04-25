import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../App.style.js';


export const HomePage = ({ navigation }) => {
  return (
    <React.Fragment >
    <View style={styles.navcontainer}>

      <TouchableOpacity
        title="Hírek"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Newsfeed')
        }
      >
         <Text style={styles.navigation}>Hírek</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Kocsmák"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Vendéglátó egységek')
        }
      >
        <Text style={styles.navigation}>Vendéglátó egységek</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Elfelejtett jelszó"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Elfelejtett jelszó')
        }
      >
        <Text style={styles.navigation}>Elfelejtett jelszó</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Profil"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Profil')
        }
      >
        <Text style={styles.navigation}>Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Teszt"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Teszt')
        }
      >
        <Text style={styles.navigation}>Teszt</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Térkép"
        style={styles.navigation}
        onPress={() =>
          navigation.navigate('Térkép')
        }
      >
        <Text style={styles.navigation}>Térkép</Text>
      </TouchableOpacity>
    </View>
    </React.Fragment>
  );
};
