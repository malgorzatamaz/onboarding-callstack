import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import { MockedProvider } from "src/mocks/MockedProvider";
import { weatherMocks } from "src/mocks/weatherMocks";
import * as hooks from "src/api/weatherApi";
import { CityList } from "./";

jest.spyOn(hooks, "useGetWeatherByCityQuery").mockReturnValue({
  data: weatherMocks,
  isError: false,
  isLoading: false,
  refetch: jest.fn(),
});
const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

test("should render weather details", async () => {
  const { getByText, queryAllByText, toJSON } = render(
    <MockedProvider>
      <NavigationContainer>
        <CityList />
      </NavigationContainer>
    </MockedProvider>
  );

  expect(toJSON()).toMatchSnapshot();
  expect(getByText("Warszawa")).toBeTruthy();
  expect(getByText("Wrocław")).toBeTruthy();
  expect(getByText("Żywiec")).toBeTruthy();
  expect(queryAllByText("15 °C")).toHaveLength(3);
});

test("should navigate to weather details", () => {
  const { queryAllByTestId } = render(
    <MockedProvider>
      <NavigationContainer>
        <CityList />
      </NavigationContainer>
    </MockedProvider>
  );

  fireEvent.press(queryAllByTestId("cityRow")[0]);
  expect(mockedNavigate).toHaveBeenCalledWith("CityDetails", {
    city: "Warszawa",
  });
});
