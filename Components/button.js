import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { themecolors } from "../screens/global/globalstyles";

export const Button = ({ styling, text, textStyling }) => {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.button, ...styling }}>
        <Text style={{ ...styles.text, ...textStyling }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: themecolors.secondary,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: themecolors.primary,
  },

  text: {
    fontSize: 35,
    color: themecolors.tertiary,
    textAlign: "center",
  },
});
