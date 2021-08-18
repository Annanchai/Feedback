import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ThankYouSvg } from "../assets/svgs/svg";
import { LanguageContext } from "../Components/language-context";
import { globalFonts, sc, themeColors } from "../globalStyles";

export default ThankYou = ({ navigation }) => {
  const language = useContext(LanguageContext);
  setTimeout(() => {
    navigation.popToTop("Language");
  }, 5000);

  return (
    <View style={styles.container}>
      <View style={styles.thankYouSvg}>
        <ThankYouSvg />
      </View>
      {language.english ? (
        <View style={styles.textContainer}>
          <View style={styles.countContainer}>
            <Text style={styles.text1}>MORE THAN</Text>
            <Text style={styles.text2}>15K</Text>
            <Text style={styles.text3}>HAPPY PATIENTS</Text>
          </View>
          <Text style={styles.text4}>THANK YOU</Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <View style={styles.countContainer}>
            <Text style={styles.textA1}>أكثر من</Text>
            <Text style={styles.textA2}>١٥ ألفاً</Text>
            <Text style={styles.textA3}>مريض سعيد</Text>
          </View>
          <Text style={styles.textA4}>شكراً لك</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30 * sc,
    flex: 1,
    backgroundColor: themeColors.primary,
  },

  thankYouSvg: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  textContainer: {
    flexDirection: "row",
  },

  countContainer: {
    margin: 50 * sc,
  },

  text1: {
    fontFamily: globalFonts.primaryBold,
    fontSize: 60,
    color: themeColors.tertiary3,
    textAlign: "center",
    marginBottom: -20 * sc,
  },
  text2: {
    fontFamily: globalFonts.primaryBold,
    fontSize: 250,
    color: themeColors.primary,
    textAlign: "center",
  },
  text3: {
    fontFamily: globalFonts.primaryBold,
    fontSize: 60,
    color: themeColors.tertiary1,
    textAlign: "center",
    marginTop: 10 * sc,
  },
  text4: {
    fontFamily: globalFonts.primaryBold,
    fontSize: 80,
    color: themeColors.tertiary1,
    textAlign: "center",
    width: 350 * sc,
    marginTop: 200 * sc,
    marginLeft: 100 * sc,
  },
  textA1: {
    fontFamily: globalFonts.secondaryBold,
    fontSize: 70,
    color: themeColors.tertiary3,
    textAlign: "center",
  },
  textA2: {
    fontFamily: globalFonts.secondaryBold,
    fontSize: 125,
    color: themeColors.primary,
    textAlign: "center",
  },
  textA3: {
    fontFamily: globalFonts.secondaryBold,
    fontSize: 70,
    color: themeColors.tertiary1,
    textAlign: "center",
  },
  textA4: {
    fontFamily: globalFonts.secondaryBold,
    fontSize: 80,
    color: themeColors.tertiary1,
    textAlign: "center",
    width: 350 * sc,
    marginTop: 150 * sc,
    marginLeft: 100 * sc,
  },
});
