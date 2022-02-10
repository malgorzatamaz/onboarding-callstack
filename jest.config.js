module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|@react-navigation)/)",
  ],
  setupFilesAfterEnv: [
    "./jest.setup.js",
    "@testing-library/jest-native/extend-expect",
  ],
};
