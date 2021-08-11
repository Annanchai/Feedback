import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { RatingSvg } from "../assets/svgs/svg";
import { Button1 } from "../Components/button";
import { Button2 } from "../Components/button2";
import { globalFonts, sc, themeColors } from "../globalStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { LanguageContext } from "../Components/language-context";
import axios from "axios";

const Line = () => <View style={styles.line}></View>;

export default Confirmation = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const language = useContext(LanguageContext);

  const data = { ...route.params };

  const ratingConvert = (rating) => {
    switch (rating) {
      case "excellent":
        return "ممتاز ";
      case "good":
        return "جيد";
      case "average":
        return "متوسط ";
      case "poor":
        return "سيئ";
      default:
        return null;
    }
  };

  const submitHandler = () => {
    url = "https://mysterious-basin-11020.herokuapp.com/feedbackdata";
    setIsLoading(true);

    axios
      .post(url, data)
      .then((res) => {
        const result = {
          status: res.status,
          message: res.message,
        };
        if (result.status === 200) {
          setIsLoading(false);
          navigation.popToTop("Language");
        } else {
          null;
        }
      })
      .catch((error) => console.log(error));
  };

  return (
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
          {language.english ? (
            <Text style={styles.heading1}>CONFIRMATION</Text>
          ) : (
            <Text style={styles.heading2}>تأكيد</Text>
          )}
        </View>

        {language.english ? (
          <View style={styles.itemsContainer}>
            <View style={styles.userInfoContainer}>
              <View style={styles.infoContainer}>
                <Text style={styles.text}>Name: {data.name}</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <Text style={styles.text}>
                  Phone Number: {data.phoneNumber}
                </Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <Text style={styles.text}>Place: {data.place}</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <Text style={styles.text}>Email: {data.email}</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <Text style={styles.text}>Suggestions</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <View style={styles.suggestionContainer}>
                <Text style={styles.suggestionText1}>{data.suggestions}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
              <View style={styles.infoContainer}>
                <View style={styles.ratingTextContainer}>
                  <Text style={styles.text}>Reception: </Text>
                  <Text style={styles.ratingText}>{data.reception}</Text>
                </View>

                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <View style={styles.ratingTextContainer}>
                  <Text style={styles.text}>Optometry: </Text>
                  <Text style={styles.ratingText}>{data.optometry}</Text>
                </View>

                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <View style={styles.ratingTextContainer}>
                  <Text style={styles.text}>Doctor: </Text>
                  <Text style={styles.ratingText}>{data.doctor}</Text>
                </View>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <View style={styles.ratingTextContainer}>
                  <Text style={styles.text}>Nursing: </Text>
                  <Text style={styles.ratingText}>{data.nursing}</Text>
                </View>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <View style={styles.ratingTextContainer}>
                  <Text style={styles.text}>Opticals: </Text>
                  <Text style={styles.ratingText}>{data.opticals}</Text>
                </View>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer}>
                <View style={styles.ratingTextContainer}>
                  <Text style={styles.text}>Cleanliness: </Text>
                  <Text style={styles.ratingText}>{data.cleanliness}</Text>
                </View>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />

              <Button1
                styling={styles.button1}
                text={
                  isLoading ? (
                    <ActivityIndicator
                      size="large"
                      color={themeColors.primary}
                    />
                  ) : (
                    "SUBMIT"
                  )
                }
                onPress={submitHandler}
              />
            </View>
          </View>
        ) : (
          <View style={styles.itemsContainer1}>
            <View style={styles.userInfoContainer}>
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>الإسم: {data.name}</Text>

                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>رقم الهاتف: {data.phoneNumber}</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>المكان: {data.place}</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>الإيميل: {data.email}</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>الاقتراحات</Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <View style={styles.suggestionContainer}>
                <Text style={styles.suggestionText1}>{data.suggestions}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer1}>
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>
                  استقبال: {ratingConvert(data.reception)}
                </Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>
                  أخصائي عيون: {ratingConvert(data.optometry)}
                </Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>
                  الدكتور: {ratingConvert(data.doctor)}
                </Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>
                  التمريض: {ratingConvert(data.nursing)}
                </Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>
                  النظارات: {ratingConvert(data.opticals)}
                </Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <View style={styles.infoContainer1}>
                <Text style={styles.text2}>
                  النظافه: {ratingConvert(data.cleanliness)}
                </Text>
                <FontAwesome5 name="pencil-alt" {...pencilStyling} />
              </View>
              <Line />
              <Button2
                styling={styles.button2}
                text={
                  isLoading ? (
                    <ActivityIndicator
                      size="large"
                      color={themeColors.primary}
                    />
                  ) : (
                    "إرسال"
                  )
                }
                onPress={submitHandler}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const pencilStyling = {
  size: 24,
  color: themeColors.primary,
};

const styles = StyleSheet.create({
  line: {
    width: 550 * sc,
    height: 2 * sc,
    backgroundColor: themeColors.primary,
    marginBottom: 5 * sc,
  },
  container: {
    paddingTop: 30 * sc,
    flex: 1,
    alignItems: "center",
    backgroundColor: themeColors.tertiary3,
  },
  svgContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  imageContainer: {
    flexDirection: "row",
    marginVertical: 60 * sc,
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  logo: {
    width: 260 * sc,
    height: 113 * sc,
  },
  itemsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 100 * sc,
  },
  itemsContainer1: {
    flexDirection: "row-reverse",
    width: "100%",
    alignSelf: "center",
    marginTop: 70 * sc,
  },
  userInfoContainer: {
    marginLeft: 50 * sc,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer1: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingTextContainer: {
    flexDirection: "row",
  },
  suggestionContainer: {
    width: 550 * sc,
    height: 140 * sc,
    borderColor: themeColors.primary,
    borderWidth: 2 * sc,
    marginTop: 5 * sc,
    padding: 10 * sc,
  },
  suggestionText1: {
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.tertiary1,
    fontSize: 25 * sc,
  },
  ratingContainer: {
    marginLeft: 50 * sc,
  },
  ratingContainer1: {
    marginLeft: 0 * sc,
  },
  text: {
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.tertiary1,
    fontSize: 25 * sc,
  },
  text2: {
    fontFamily: globalFonts.secondaryRegular,
    color: themeColors.tertiary1,
    fontSize: 20 * sc,
  },
  ratingText: {
    fontFamily: globalFonts.primaryRegular,
    color: themeColors.tertiary1,
    fontSize: 25 * sc,
    textTransform: "capitalize",
  },
  heading1: {
    fontFamily: globalFonts.primaryBold,
    color: themeColors.tertiary1,
    fontSize: 80 * sc,
  },
  heading2: {
    fontFamily: globalFonts.secondaryBold,
    color: themeColors.tertiary1,
    fontSize: 70 * sc,
  },
  //   input: {
  //     borderWidth: 1 * sc,
  //     borderColor: themeColors.tertiary3,
  //     marginTop: 80 * sc,
  //     padding: 30 * sc,
  //     width: 600 * sc,
  //     backgroundColor: themeColors.tertiary1,
  //     borderRadius: 10 * sc,
  //     elevation: 20 * sc,
  //     textAlignVertical: "top",
  //   },
  //   lottie: {
  //     width: 500 * sc,
  //     height: 500 * sc,
  //   },
  button1: {
    marginBottom: 30 * sc,
    paddingHorizontal: 80 * sc,
  },
  button2: {
    marginBottom: 30 * sc,
    paddingHorizontal: 80 * sc,
  },
});
