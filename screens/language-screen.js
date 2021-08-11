import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LanguageSvg } from "../assets/svgs/svg";
import { Button1 } from "../Components/button";
import { Button2 } from "../Components/button2";
import { LanguageContext } from "../Components/language-context";
import { globalFonts, sc, themeColors } from "../globalStyles";

export default LanguageScreen = ({ navigation }) => {
  const { english, setEnglish } = useContext(LanguageContext);
  const englishHandler = () => {
    setEnglish(true);
    navigation.navigate("GetStarted");
  };
  const arabicHandler = () => {
    setEnglish(false);
    navigation.navigate("GetStarted");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />
      <View style={styles.svgContainer}>
        <LanguageSvg />
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <View>
          <Text style={styles.heading1}>
            ملاحظاتك قيمه،وسوف توفر لك خدمه أفضل
          </Text>
          <Text style={styles.heading2}>
            Your feedback is valuable, it will provide you a better service!
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button1 text="ENGLISH" onPress={englishHandler} />
        <Button2 text="العربية" onPress={arabicHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    position: "absolute",
  },

  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 80 * sc,
  },

  logo: {
    width: 345 * sc,
    height: 150 * sc,
  },

  heading1: {
    fontFamily: globalFonts.secondaryRegular,
    color: themeColors.tertiary1,
    fontSize: 25 * sc,
  },
  heading2: {
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.tertiary1,
    fontSize: 30 * sc,
    width: 580 * sc,
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300 * sc,
  },
});
