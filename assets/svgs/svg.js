import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { sc } from "../../globalStyles";

export const LanguageSvg = () => (
  <Svg
    width={1280 * sc}
    height={436 * sc}
    viewBox="0 0 1280 436"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1280 1H0v333.528s73.257 257.521 1280-52.005V1z"
      fill="#5BBD53"
      stroke="#5BBD53"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GetStartedSvg = () => (
  <Svg
    width={806 * sc}
    height={800 * sc}
    viewBox="0 0 806 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M285 798C855 419 798.5 0 798.5 0H2.454v798H285z" fill="#5BBD53" />
    <Path
      d="M2 0h.454m0 0H798.5S855 419 285 798H2.454V0z"
      stroke="#5BBD53"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ContactSvg = () => (
  <Svg
    width={1280 * sc}
    height={379 * sc}
    viewBox="0 0 1280 379"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M344.21 294C170.384 307.098 0 378 0 378V-17h1280v54.5s-5.74 86.398-47.67 149c-47.37 70.725-280.934 41.859-335.176 107.5-111.993 135.529-216.412 71.106-355.415 27.5-58.635-18.394-123.423-33.084-197.529-27.5z"
      fill="#5BBD53"
      fillOpacity={0.8}
      stroke="#5BBD53"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M324.21 233C150.384 246.098-20 317-20 317V-78h1280v54.5s-5.74 86.398-47.67 149c-47.37 70.725-280.934 41.859-335.176 107.5-111.993 135.529-216.412 71.106-355.415 27.5-58.635-18.394-123.423-33.084-197.529-27.5z"
      fill="#5BBD53"
      fillOpacity={0.2}
      stroke="#5BBD53"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M297.21 176C123.384 189.098-47 260-47 260v-395h1280v54.5s-5.74 86.398-47.67 149c-47.37 70.725-280.934 41.859-335.176 107.5-111.993 135.529-216.412 71.106-355.415 27.5-58.635-18.394-123.423-33.084-197.529-27.5z"
      fill="#5BBD53"
      stroke="#5BBD53"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const RatingSvg = () => (
  <Svg
    width={1277 * sc}
    height={378 * sc}
    viewBox="0 0 1277 378"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M343 293C169.785 306.098 0 377 0 377V-18h1275.5s34.5 502-735.666 338.5c0 0-122.989-33.084-196.834-27.5z"
      fill="#5BBD53"
      fillOpacity={0.8}
      stroke="#5BBD53"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M313 247c-173.215 13.098-343 84-343 84V-64h1275.5s34.5 502-735.666 338.5c0 0-122.989-33.084-196.834-27.5z"
      fill="#5BBD53"
      fillOpacity={0.2}
      stroke="#5BBD53"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M285 208c-173.215 13.098-343 84-343 84v-395h1275.5s34.5 502-735.666 338.5c0 0-122.989-33.084-196.834-27.5z"
      fill="#5BBD53"
      stroke="#5BBD53"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const PoorSvg = () => (
  <Svg
    width={96 * sc}
    height={96 * sc}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={48} cy={48} r={48} fill="#D5131F" />
    <Circle cx={73} cy={38} r={6} fill="#000" />
    <Circle cx={76} cy={38} r={1.5} fill="#fff" />
    <Circle cx={23} cy={37} r={6} fill="#000" />
    <Circle cx={26} cy={37} r={1.5} fill="#fff" />
    <Path
      d="M23.374 46l1.326 1.769c.263.35.441.795.514 1.28.072.485.035.987-.107 1.444-.142.457-.382.848-.69 1.123-.309.274-.671.421-1.042.421-.37 0-.733-.147-1.042-.421-.308-.275-.548-.666-.69-1.123a3.282 3.282 0 01-.107-1.444c.073-.485.251-.93.514-1.28L23.374 46z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M31 69.454h0c19.035-11.264 35 0 35 0-15.35-19.571-29.678-5.301-35 0z"
      fill="#000"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const AverageSvg = () => (
  <Svg
    width={96 * sc}
    height={96 * sc}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={48} cy={48} r={48} fill="#FF0" />
    <Circle cx={73} cy={38} r={6} fill="#000" />
    <Circle cx={76} cy={38} r={1.5} fill="#fff" />
    <Circle cx={23} cy={37} r={6} fill="#000" />
    <Circle cx={26} cy={37} r={1.5} fill="#fff" />
    <Path
      d="M33 62h30"
      stroke="#000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GoodSvg = () => (
  <Svg
    width={96 * sc}
    height={96 * sc}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={48} cy={48} r={48} fill="#74E46B" />
    <Circle cx={73} cy={38} r={6} fill="#000" />
    <Circle cx={76} cy={38} r={1.5} fill="#fff" />
    <Circle cx={23} cy={37} r={6} fill="#000" />
    <Circle cx={26} cy={37} r={1.5} fill="#fff" />
    <Path
      d="M28 62s20 22.5 40 0"
      stroke="#000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ExcellentSvg = () => (
  <Svg
    width={96 * sc}
    height={96 * sc}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={48} cy={48} r={48} fill="#74E46B" />
    <Circle cx={73} cy={38} r={6} fill="#000" />
    <Circle cx={76} cy={38} r={1.5} fill="#fff" />
    <Circle cx={23} cy={38} r={6} fill="#000" />
    <Circle cx={26} cy={38} r={1.5} fill="#fff" />
    <Path
      d="M14 54c16.5 31.5 54 30.5 69 0"
      stroke="#000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ThankYouSvg = () => (
  <Svg
    width={1279 * sc}
    height={644 * sc}
    viewBox="0 0 1279 644"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M1279 178.124C718.799 566.475 213.913 565.733 0 508.53V0h1279v178.124z"
      fill="#fff"
    />
    <Circle cx={954.5} cy={348.5} r={295.5} fill="#4FC745" />
    <Circle cx={955} cy={348} r={266} fill="#62D559" />
    <Circle cx={954.5} cy={348.5} r={240.5} fill="#6FEA65" />
  </Svg>
);
