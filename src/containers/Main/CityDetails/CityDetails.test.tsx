/* eslint-disable import/no-unresolved */
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";
import createMockStore from "redux-mock-store";
import React from "react";

const middlewares = getDefaultMiddleware();
const mockStore = createMockStore(middlewares);
const store = mockStore();

import * as hooks from "src/api/weatherApi";
import { weatherMocks } from "src/mocks/weatherMocks";
import { CityDetails } from "./";

jest.spyOn(hooks, "useGetWeatherByCityQuery").mockReturnValue({
  data: weatherMocks,
  isError: false,
  isLoading: false,
  refetch: jest.fn(),
});

test("should render weather details", async () => {
  const route = { params: { city: "Warszawa" } };
  const { getByText, getByTestId, toJSON } = render(
    <Provider store={store}>
      <CityDetails route={route} />
    </Provider>
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
