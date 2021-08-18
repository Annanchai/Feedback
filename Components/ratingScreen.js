import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  RatingSvg,
  PoorSvg,
  AverageSvg,
  GoodSvg,
  ExcellentSvg,
} from "../assets/svgs/svg";
import { Button1 } from "../Components/button";
import { Button2 } from "../Components/button2";
import { globalFonts, sc, themeColors, windowHeight } from "../globalStyles";
import { LanguageContext } from "../Components/language-context";

export const RatingScreen = ({
  text,
  poorSelected,
  averageSelected,
  goodSelected,
  excellentSelected,
  poorPress,
  averagePress,
  goodPress,
  excellentPress,
  onPress,
  error,
}) => {
  const language = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <RatingSvg />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headingContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={language.english ? styles.heading1 : styles.heading2}>
            {text}
          </Text>
        </View>
        <View
          style={
            language.english
              ? styles.ratingSvgContainer1
              : styles.ratingSvgContainer2
          }
        >
          <TouchableOpacity
            style={poorSelected ? styles.selectedRatingSvg : styles.ratingSvg}
            onPress={poorPress}
          >
            <PoorSvg />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              averageSelected ? styles.selectedRatingSvg : styles.ratingSvg
            }
            onPress={averagePress}
          >
            <AverageSvg />
          </TouchableOpacity>
          <TouchableOpacity
            style={goodSelected ? styles.selectedRatingSvg : styles.ratingSvg}
            onPress={goodPress}
          >
            <GoodSvg />
          </TouchableOpacity>
          <TouchableOpacity
            style={
              excellentSelected ? styles.selectedRatingSvg : styles.ratingSvg
            }
            onPress={excellentPress}
          >
            <ExcellentSvg />
          </TouchableOpacity>
        </View>

        {error ? (
          <Text style={styles.error}>
            {language.english ? "Please select a rating" : "الرجاء تحديد تصنيف"}
          </Text>
        ) : null}

        {language.english ? (
          <Button1 styling={styles.button1} text="NEXT" onPress={onPress} />
        ) : (
          <Button2 styling={styles.button2} text="التالي" onPress={onPress} />
        )}
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

  contentContainer: {},

  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50 * sc,
  },

  imageContainer: {
    height: windowHeight,
    justifyContent: "space-around",
  },

  logo: {
    width: 260 * sc,
    height: 113 * sc,
  },

  heading1: {
    fontFamily: globalFonts.primaryBold,
    color: themeColors.tertiary1,
    fontSize: 80 * sc,
    marginRight: 50 * sc,
  },

  heading2: {
    fontFamily: globalFonts.secondaryBold,
    color: themeColors.tertiary1,
    fontSize: 70 * sc,
    marginRight: 50 * sc,
  },

  ratingSvgContainer1: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 50 * sc,
    marginTop: 200 * sc,
  },
  ratingSvgContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 50 * sc,
    marginTop: 175 * sc,
  },

  ratingSvg: {
    paddingHorizontal: 50 * sc,
    paddingVertical: 25 * sc,
  },
  selectedRatingSvg: {
    paddingHorizontal: 50 * sc,
    paddingVertical: 25 * sc,
    borderRadius: 10 * sc,
    borderColor: themeColors.primary,
    borderWidth: 3 * sc,
  },

  error: {
    textAlign: "center",
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.tertiary5,
    marginBottom: 10 * sc,
  },

  button1: {
    marginBottom: 40 * sc,
    marginHorizontal: 450 * sc,
  },
  button2: {
    marginBottom: 40 * sc,
    marginHorizontal: 450 * sc,
  },
});
