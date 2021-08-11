import React, { useContext, useState } from "react";

import { LanguageContext } from "../Components/language-context";
import { RatingScreen } from "../Components/ratingScreen";

export default Reception = ({ navigation, route }) => {
  const [selected, setselected] = useState();
  const language = useContext(LanguageContext);
  const [error, setError] = useState();

  const data = { ...route.params, reception: selected };

  const poorHandler = () => {
    setselected("poor");
    setError(false);
  };
  const averageHandler = () => {
    setselected("average");
    setError(false);
  };
  const goodHandler = () => {
    setselected("good");
    setError(false);
  };
  const excellentHandler = () => {
    setselected("excellent");
    setError(false);
  };
  const nextHandler = () => {
    if (selected === undefined) {
      setError(true);
    } else {
      navigation.navigate("Optometry", data);
    }
  };
  return (
    <RatingScreen
      text={language.english ? "RECEPTION" : "الاستقبال"}
      poorSelected={selected === "poor" ? true : false}
      averageSelected={selected === "average" ? true : false}
      goodSelected={selected === "good" ? true : false}
      excellentSelected={selected === "excellent" ? true : false}
      poorPress={poorHandler}
      averagePress={averageHandler}
      goodPress={goodHandler}
      excellentPress={excellentHandler}
      onPress={nextHandler}
      error={error}
    ></RatingScreen>
  );
};
