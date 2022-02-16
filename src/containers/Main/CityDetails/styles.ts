import { StyleSheet } from "react-native";

import { spacing } from "src/styles";

export default StyleSheet.create({
  cityName: { fontWeight: "bold", marginBottom: spacing.sm },
  badgeWrapper: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "flex-end",
  },
  weatherDescription: { textTransform: "capitalize" },
});
