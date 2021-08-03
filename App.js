import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import LanguageScreen from './screens/language-screen';


const getFonts = () => Font.loadAsync({
  'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-semiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'Lemonada-light': require('./assets/fonts/Lemonada-Light.ttf'),
  'Lemonada-regular': require('./assets/fonts/Lemonada-Regular.ttf'),
  'Lemonada-medium': require('./assets/fonts/Lemonada-Medium.ttf'),
  'Lemonada-semiBold': require('./assets/fonts/Lemonada-SemiBold.ttf'),
  'Lemonada-bold': require('./assets/fonts/Lemonada-Bold.ttf'),
});

export default function App() {
  const [fonstLoaded, setFontsLoaded] = useState(false)
  if(fonstLoaded){
  return (
    <View style={styles.container}>
      <LanguageScreen />
      
    </View>
  )
  }
  else {
    return(
      <AppLoading
         startAsync={getFonts}
         onFInish={() => setFontsLoaded(true)}
         onError={console.warn}
         />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
