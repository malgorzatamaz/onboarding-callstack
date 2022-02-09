import { StyleSheet } from "react-native";

import { spacing, colors } from "src/styles";

export default StyleSheet.create({
  badgeWrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cityName: { color: colors.primary, flex: 1 },
  itemWrapper: {
    padding: spacing.lg,
    backgroundColor: colors.white,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  nextIcon: { width: 30, height: 30 },
});
