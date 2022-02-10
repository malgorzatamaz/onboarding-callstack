import { StyleSheet } from "react-native";

import { spacing, colors } from "src/styles";

export default StyleSheet.create({
  badgeWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cityName: {
    color: colors.primary,
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: colors.white,
    height: 60,
    padding: spacing.lg,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nextIcon: { width: 30, height: 30 },
});
