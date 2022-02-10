import { Divider } from "react-native-paper";
import { FlatList } from "react-native";
import React, { FC } from "react";

import { CityItem } from "./CityItem";

type CityListProps = {
  cities?: string[];
};

const CITY_MOCK = ["Warszawa", "Wrocław", "Żywiec"];

export const CityList: FC<CityListProps> = ({ cities = CITY_MOCK }) => {
  return (
    <FlatList
      data={cities}
      ItemSeparatorComponent={Divider}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <CityItem city={item} />}
    />
  );
};
