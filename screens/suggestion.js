import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { RatingSvg } from "../assets/svgs/svg";
import { Button1 } from "../Components/button";
import { Button2 } from "../Components/button2";
import { globalFonts, sc, themeColors, windowHeight } from "../globalStyles";
import LottieView from "lottie-react-native";
import { LanguageContext } from "../Components/language-context";

export default Suggestions = ({ navigation, route }) => {
  const [keyboardShift, setKeyboardShift] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const language = useContext(LanguageContext);

  const data = { ...route.params, suggestions: suggestions };

  const suggestionHandler = (value) => {
    setSuggestions(value);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <RatingSvg />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />
            <LottieView
              style={styles.lottie}
              source={require("../assets/lottie/suggestions.json")}
              autoPlay
            />
          </View>
          <KeyboardAvoidingView behavior="position" enabled={keyboardShift}>
            <View style={styles.itemsContainer}>
              {language.english ? (
                <Text style={styles.heading1}>Your Suggestions</Text>
              ) : (
                <Text style={styles.heading2}>اقتراحاتكم</Text>
              )}
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={8}
                onFocus={() => setKeyboardShift(true)}
                value={suggestions}
                onChangeText={suggestionHandler}
              />
              {language.english ? (
                <Button1
                  styling={styles.button1}
                  text="NEXT"
                  onPress={() => navigation.navigate("Confirmation", data)}
                />
              ) : (
                <Button2
                  styling={styles.button2}
                  text="التالي"
                  onPress={() => navigation.navigate("Confirmation", data)}
                />
              )}
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    width: "100%",
    height: "100%",
  },
  container: {
    paddingTop: 30 * sc,
  },
  svgContainer: {
    position: "absolute",
  },

  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  imageContainer: {
    height: windowHeight,
    justifyContent: "space-around",
  },

  logo: {
    width: 260 * sc,
    height: 113 * sc,
    marginLeft: 150 * sc,
  },

  itemsContainer: {
    height: windowHeight,
    justifyContent: "space-around",
    alignItems: "center",
  },

  heading1: {
    fontFamily: globalFonts.primaryBold,
    color: themeColors.tertiary1,
    fontSize: 80 * sc,
    marginRight: 100 * sc,
  },

  heading2: {
    fontFamily: globalFonts.secondaryBold,
    color: themeColors.tertiary1,
    fontSize: 70 * sc,
    marginRight: 200 * sc,
    width: 600 * sc,
  },

  input: {
    borderWidth: 1 * sc,
    borderColor: themeColors.tertiary3,
    marginTop: 80 * sc,
    padding: 30 * sc,
    width: 600 * sc,
    backgroundColor: themeColors.tertiary1,
    borderRadius: 10 * sc,
    elevation: 20 * sc,
    textAlignVertical: "top",
  },
  lottie: {
    width: 500 * sc,
    height: 500 * sc,
  },

  button1: {
    marginBottom: 30 * sc,
    paddingHorizontal: 80 * sc,
  },
  button2: {
    marginBottom: 30 * sc,
    paddingHorizontal: 80 * sc,
  },
});
