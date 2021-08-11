import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalFonts, sc, themeColors } from "../globalStyles";

export const Button2 = ({ styling, text, textStyling, onPress }) => {
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
    paddingHorizontal: 150 * sc,
    paddingVertical: 16 * sc,
    backgroundColor: themeColors.tertiary1,
    borderRadius: 20 * sc,
    borderWidth: 3 * sc,
    borderColor: themeColors.primary,
    marginHorizontal: 50 * sc,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: globalFonts.secondaryRegular,
    fontSize: 25 * sc,
    color: themeColors.secondary,
    textAlign: "center",
  },
});
