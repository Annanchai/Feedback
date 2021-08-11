import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GetStartedSvg } from "../assets/svgs/svg";
import { Button1 } from "../Components/button";
import { Button2 } from "../Components/button2";
import { globalFonts, sc, themeColors, windowHeight } from "../globalStyles";
import LottieView from "lottie-react-native";
import { LanguageContext } from "../Components/language-context";

export default GetStarted = ({ navigation }) => {
  const language = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent />
      <View style={styles.svgContainer}>
        <GetStartedSvg />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <View style={styles.itemsContainer}>
          {language.english ? (
            <Text style={styles.text1}>
              Your feedback is valuable, it will provide you a better service!
            </Text>
          ) : (
            <Text style={styles.text2}>
              ملاحظاتك قيمه،وسوف توفر لك خدمه أفضل
            </Text>
          )}

          <LottieView
            style={styles.lottie}
            source={require("../assets/lottie/feedback-star.json")}
            autoPlay
          />
          {language.english ? (
            <Button1
              styling={styles.button1}
              text="GET STARTED"
              onPress={() => navigation.navigate("Contact")}
            />
          ) : (
            <Button2
              styling={styles.button2}
              text="دعونا نبدء"
              onPress={() => navigation.navigate("Contact")}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30 * sc,
  },
  svgContainer: {
    position: "absolute",
  },

  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: 475 * sc,
    height: 207 * sc,
    marginLeft: 100 * sc,
    marginBottom: 150 * sc,
  },

  itemsContainer: {
    height: windowHeight,
    justifyContent: "space-around",
    alignItems: "center",
  },

  text1: {
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.tertiary3,
    fontSize: 35 * sc,
    width: 580 * sc,
    textAlign: "center",
  },

  text2: {
    fontFamily: globalFonts.secondaryRegular,
    color: themeColors.tertiary2,
    fontSize: 30 * sc,
    width: 580 * sc,
    textAlign: "center",
  },

  lottie: {
    width: 350 * sc,
    height: 350 * sc,
    marginLeft: 20 * sc,
  },

  button1: {
    marginBottom: 40 * sc,
    paddingHorizontal: 80 * sc,
  },
  button2: {
    marginBottom: 40 * sc,
    paddingHorizontal: 80 * sc,
  },
});
