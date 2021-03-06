import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalFonts, sc, themeColors } from "../globalStyles";

export const Button1 = ({ styling, text, textStyling, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.button, ...styling }}>
        <Text style={{ ...styles.text, ...textStyling }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 125 * sc,
    paddingVertical: 18 * sc,
    backgroundColor: themeColors.tertiary1,
    borderRadius: 20 * sc,
    borderWidth: 3 * sc,
    borderColor: themeColors.primary,
    marginHorizontal: 50 * sc,
  },

  text: {
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.secondary,
    fontSize: 35 * sc,
    textAlign: "center",
  },
});
