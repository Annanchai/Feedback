import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LanguageScreen from "../screens/language-screen";
import GetStarted from "../screens/getStarted";
import Contact from "../screens/contact";
import { LanguageContext } from "../Components/language-context";
import Reception from "../screens/reception";
import Optometry from "../screens/optometry";
import Doctor from "../screens/doctor";
import Nursing from "../screens/nursing";
import Opticals from "../screens/opticals";
import Cleanliness from "../screens/cleanliness";
import Suggestions from "../screens/suggestion";
import Confirmation from "../screens/confirmation";
import ThankYou from "../screens/thank-you";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <LanguageContext.Consumer>
      {() => (
        <NavigationContainer>
          <Stack.Navigator
            headerMode="none"
            screenOptions={{
              gestureEnabled: true,
              gestureDirection: "horizontal",
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            <Stack.Screen name="Language" component={LanguageScreen} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Reception" component={Reception} />
            <Stack.Screen name="Optometry" component={Optometry} />
            <Stack.Screen name="Doctor" component={Doctor} />
            <Stack.Screen name="Nursing" component={Nursing} />
            <Stack.Screen name="Opticals" component={Opticals} />
            <Stack.Screen name="Cleanliness" component={Cleanliness} />
            <Stack.Screen name="Suggestions" component={Suggestions} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="ThankYou" component={ThankYou} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </LanguageContext.Consumer>
  );
};
