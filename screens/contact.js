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
import { StatusBar } from "expo-status-bar";
import { ContactSvg } from "../assets/svgs/svg";
import { Button1 } from "../Components/button";
import { Button2 } from "../Components/button2";
import { globalFonts, sc, themeColors, windowHeight } from "../globalStyles";
import LottieView from "lottie-react-native";
import { LanguageContext } from "../Components/language-context";
import { Value } from "react-native-reanimated";

export default Contact = ({ navigation, route }) => {
  const [keyboardShift, setKeyboardShift] = useState(false);
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    place: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const language = useContext(LanguageContext);

  const nameChangeHandler = (value) => {
    setData({ ...data, name: value });
    setError(false);
  };
  const phoneChangeHandler = (value) => {
    setData({ ...data, phoneNumber: value });
    value.length === 8 ? setError(false) : setError(true);
  };
  const placeChangeHandler = (value) => {
    setData({ ...data, place: value });
  };
  const emailChangeHandler = (value) => {
    setData({ ...data, email: value });
  };
  const nextHandler = () => {
    if (data.name === "" || data.phoneNumber === "" || data.place === "") {
      setError(true);
    } else {
      navigation.navigate("Reception", data);
    }
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <StatusBar style="light" translucent />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.svgContainer}>
            <ContactSvg />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/images/logo.png")}
                style={styles.logo}
              />
              <LottieView
                style={styles.lottie}
                source={require("../assets/lottie/contact.json")}
                autoPlay
              />
            </View>
            <KeyboardAvoidingView behavior="position" enabled={keyboardShift}>
              <View style={styles.itemsContainer}>
                {language.english ? (
                  <View style={styles.formContainer}>
                    <Text style={styles.text1}>Contact Information</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Name"
                      value={data.name}
                      onFocus={() => setKeyboardShift(false)}
                      onChangeText={nameChangeHandler}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Phone number"
                      maxLength={8}
                      value={data.phoneNumber}
                      keyboardType="numeric"
                      onFocus={() => setKeyboardShift(false)}
                      onChangeText={phoneChangeHandler}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Place"
                      value={data.place}
                      onFocus={() => setKeyboardShift(true)}
                      onChangeText={placeChangeHandler}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Email address"
                      value={data.email}
                      keyboardType="email-address"
                      onFocus={() => setKeyboardShift(true)}
                      onChangeText={emailChangeHandler}
                    />
                    {error ? (
                      <Text style={styles.error}>
                        Please enter name, place and valid phone number
                      </Text>
                    ) : null}
                  </View>
                ) : (
                  <View style={styles.formContainer}>
                    <Text style={styles.text2}>بيانات الشخص</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="الإسم"
                      value={data.name}
                      onFocus={() => setKeyboardShift(false)}
                      direction="rtl"
                      onChangeText={nameChangeHandler}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="رقم الهاتف"
                      keyboardType="numeric"
                      maxLength={8}
                      value={data.phoneNumber}
                      onFocus={() => setKeyboardShift(false)}
                      onChangeText={phoneChangeHandler}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="المكان"
                      value={data.place}
                      onFocus={() => setKeyboardShift(true)}
                      onChangeText={placeChangeHandler}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="الإيميل"
                      keyboardType="email-address"
                      value={data.email}
                      onFocus={() => setKeyboardShift(true)}
                      onChangeText={emailChangeHandler}
                    />
                    {error ? (
                      <Text style={styles.error}>
                        الرجاء تسجيل الاسم، المكان ورقم الهاتف الصحيح
                      </Text>
                    ) : null}
                  </View>
                )}

                {language.english ? (
                  <Button1
                    styling={styles.button1}
                    text="NEXT"
                    onPress={nextHandler}
                  />
                ) : (
                  <Button2
                    styling={styles.button2}
                    text="التالي"
                    onPress={nextHandler}
                  />
                )}
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  },

  itemsContainer: {
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
  },

  formContainer: {
    backgroundColor: themeColors.tertiary4,
    padding: 40 * sc,
    borderRadius: 20 * sc,
    marginBottom: 30 * sc,
    elevation: 20 * sc,
  },

  text1: {
    fontFamily: globalFonts.primaryBold,
    color: themeColors.tertiary3,
    fontSize: 35 * sc,
    textAlign: "center",
  },
  text2: {
    fontFamily: globalFonts.secondaryBold,
    color: themeColors.tertiary3,
    fontSize: 30 * sc,
    textAlign: "center",
  },

  input: {
    width: 500 * sc,
    backgroundColor: themeColors.tertiary1,
    paddingHorizontal: 30 * sc,
    paddingVertical: 15 * sc,
    borderRadius: 30 * sc,
    fontFamily: globalFonts.primaryRegular,
    fontSize: 20 * sc,
    marginVertical: 20 * sc,
  },
  error: {
    textAlign: "center",
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.tertiary5,
  },

  lottie: {
    width: 500 * sc,
    height: 500 * sc,
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
