import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import LanguageScreen from "./screens/language-screen";
import GetStarted from "./screens/getStarted";
import Contact from "./screens/contact";
import { HomeStack } from "./navigation/homeStack";
import { LanguageContext } from "./Components/language-context";
import { RatingScreen } from "./Components/ratingScreen";

const getFonts = () =>
  Font.loadAsync({
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-semiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Lemonada-light": require("./assets/fonts/Lemonada-Light.ttf"),
    "Lemonada-regular": require("./assets/fonts/Lemonada-Regular.ttf"),
    "Lemonada-medium": require("./assets/fonts/Lemonada-Medium.ttf"),
    "Lemonada-semiBold": require("./assets/fonts/Lemonada-SemiBold.ttf"),
    "Lemonada-bold": require("./assets/fonts/Lemonada-Bold.ttf"),
  });

export default function App() {
  const [fonstLoaded, setFontsLoaded] = useState(false);
  const [english, setEnglish] = useState(true);
  if (fonstLoaded) {
    return (
      <LanguageContext.Provider value={{ english, setEnglish }}>
        <HomeStack />
      </LanguageContext.Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
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
