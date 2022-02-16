import { render } from "@testing-library/react-native";
import React from "react";

import * as hooks from "src/api/weatherApi";
import { MockedProvider } from "src/mocks/MockedProvider";
import { weatherMocks } from "src/mocks/weatherMocks";

import { CityDetails } from "./";

jest.spyOn(hooks, "useGetWeatherByCityQuery").mockReturnValue({
  data: weatherMocks,
  isError: false,
  isLoading: false,
  refetch: jest.fn(),
});

jest.mock("@react-navigation/native", () => ({
  useRoute: jest.fn(() => ({
    params: { city: "Warszawa" },
  })),
}));

test("should render weather details", async () => {
  const { getByText, getByTestId, toJSON } = render(
    <MockedProvider>
      <CityDetails />
    </MockedProvider>
  );

  expect(toJSON()).toMatchSnapshot();
  expect(getByText("sunny")).toBeTruthy();
  expect(getByText("Warszawa")).toBeTruthy();
  expect(getByTestId("temperature")).toHaveTextContent("15 °C");
  expect(getByTestId("pressure")).toHaveTextContent("1015 hPa");
  expect(getByTestId("humidity")).toHaveTextContent("60%");
  expect(getByTestId("windSpeed")).toHaveTextContent("3 m/s");
  expect(getByTestId("cloudCover")).toHaveTextContent("75%");
});
