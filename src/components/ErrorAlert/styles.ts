import { StyleSheet } from "react-native";

import { colors, spacing } from "src/styles";

export default StyleSheet.create({
  errorWrapper: {
    backgroundColor: colors.error,
    margin: spacing.md,
    padding: spacing.lg,
  },
  errorText: { color: colors.white },
});
