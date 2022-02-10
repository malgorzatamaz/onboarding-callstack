import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function getErrorMessage(
  error: SerializedError | FetchBaseQueryError
): string {
  const isFetchBaseQueryError =
    typeof error === "object" && error != null && "status" in error;

  const isErrorWithMessage =
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof error.message === "string";

  if (isFetchBaseQueryError) {
    return "error" in error ? error.error : JSON.stringify(error.data);
  } else if (isErrorWithMessage) {
    return error.message || "Something went wrong";
  }

  return "Something went wrong";
}
