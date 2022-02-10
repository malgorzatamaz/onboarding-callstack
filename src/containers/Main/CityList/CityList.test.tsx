import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { render } from "@testing-library/react-native";
import createMockStore from "redux-mock-store";
import React from "react";

const middlewares = getDefaultMiddleware();
const mockStore = createMockStore(middlewares);
const store = mockStore();

import * as hooks from "src/api/weatherApi";
import { weatherMocks } from "src/mocks/weatherMocks";
import { CityList } from "./";

jest.spyOn(hooks, "useGetWeatherByCityQuery").mockReturnValue({
  data: weatherMocks,
  isError: false,
  isLoading: false,
  refetch: jest.fn(),
});

test("should render weather details", async () => {
  const { getByText, queryAllByText, toJSON } = render(
    <Provider store={store}>
      <NavigationContainer>
        <CityList />
      </NavigationContainer>
    </Provider>
  );

  expect(toJSON()).toMatchSnapshot();
  expect(getByText("Warszawa")).toBeTruthy();
  expect(getByText("Wrocław")).toBeTruthy();
  expect(getByText("Żywiec")).toBeTruthy();
  expect(queryAllByText("15 °C")).toHaveLength(3);
});
