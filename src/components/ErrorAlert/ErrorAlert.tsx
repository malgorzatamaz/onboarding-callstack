import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Surface, Text } from "react-native-paper";
import React, { FC, useMemo } from "react";

import { isErrorWithMessage, isFetchBaseQueryError } from "src/api/helpers";

import styles from "./styles";

type ErrorAlertProps = {
  error: FetchBaseQueryError | SerializedError;
};

export const ErrorAlert: FC<ErrorAlertProps> = ({ error }) => {
  const errorMessage = useMemo(() => {
    if (isFetchBaseQueryError(error)) {
      return "error" in error ? error.error : JSON.stringify(error.data);
    } else if (isErrorWithMessage(error)) {
      return error.message;
    }
  }, [error]);

  return (
    <Surface style={styles.errorWrapper}>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </Surface>
  );
};
