/* eslint-disable no-undef */
require("jest-fetch-mock").enableMocks();

jest.mock("react-native-paper", () => {
  return {
    ActivityIndicator: () => "<ActivityIndicator testID='activityIndicator'/>",
    Surface: () => "Surface",
    Text: () => "Text",
    Badge: () => "Badge",
    Divider: () => "Divider",
  };
});
