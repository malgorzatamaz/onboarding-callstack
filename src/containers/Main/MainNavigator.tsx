import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { CityDetails } from "./CityDetails";
import { CityList } from "./CityList";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  CityList: undefined;
  CityDetails: { city: string };
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CityList">
      <Stack.Screen name="CityList" component={CityList} />
      <Stack.Screen name="CityDetails" component={CityDetails} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
