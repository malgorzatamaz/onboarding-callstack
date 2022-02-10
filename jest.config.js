module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|@react-navigation|react-native-paper|react-native-iphone-x-helper)/)",
  ],
  setupFilesAfterEnv: [
    "./jest.setup.js",
    "@testing-library/jest-native/extend-expect",
  ],
};
