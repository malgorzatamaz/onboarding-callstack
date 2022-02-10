import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { getErrorMessage } from "./helpers";

test("should return FetchBaseQueryError error as string message", () => {
  const fetchBaseQueryError = {
    status: "FETCH_ERROR",
    error: "Something went wrong",
  };

  const expectedResult = fetchBaseQueryError.error;

  expect(getErrorMessage(fetchBaseQueryError as FetchBaseQueryError)).toBe(
    expectedResult
  );
});

test("should return FetchBaseQueryError data as string message", () => {
  const fetchBaseQueryError = {
    status: "FETCH_ERROR",
    data: { title: "error title", description: "error description" },
  };

  const expectedResult = JSON.stringify(fetchBaseQueryError.data);

  expect(getErrorMessage(fetchBaseQueryError as FetchBaseQueryError)).toBe(
    expectedResult
  );
});

test("should return SerializedError as string message", () => {
  const serializedError = {
    message: "Something went wrong",
  };

  const expectedResult = serializedError.message;

  expect(getErrorMessage(serializedError)).toBe(expectedResult);
});
