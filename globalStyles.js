import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const sc = windowWidth / 1280;

export const themeColors = {
  primary: "#5bbd53",
  secondary: "#808080",
  tertiary1: "#ffffff", //white
  tertiary2: "#000000", //black
  tertiary3: "#434343", //darkGrey
  tertiary4: "#ebeaea", //lightGrey
  tertiary5: "red",
};

export const globalFonts = {
  primaryLight: "nunito-light",
  primaryRegular: "nunito-regular",
  primarySemiBold: "nunito-semiBold",
  primaryBold: "nunito-bold",
  secondaryLight: "Lemonada-light",
  secondaryRegular: "Lemonada-regular",
  secondaryMedium: "Lemonada-medium",
  secondarySemiBold: "Lemonada-semiBold",
  secondaryBold: "Lemonada-bold",
};
