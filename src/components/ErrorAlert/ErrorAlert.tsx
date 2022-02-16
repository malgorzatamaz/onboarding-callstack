import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Surface, Text } from "react-native-paper";
import React, { FC, useMemo } from "react";

import { getErrorMessage } from "src/api/helpers";

import styles from "./styles";

type ErrorAlertProps = {
  error: FetchBaseQueryError | SerializedError;
};

export const ErrorAlert: FC<ErrorAlertProps> = ({ error }) => {
  const errorMessage = useMemo(() => getErrorMessage(error), [error]);

  return (
    <Surface style={styles.errorWrapper}>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </Surface>
  );
};
