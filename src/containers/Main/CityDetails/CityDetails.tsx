import { Badge, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import React from "react";

import { InfoRow } from "src/components";
import { RootStackParamList } from "src/containers/Main/MainNavigator";

import styles from "./styles";

export const CityDetails = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "CityDetails">) => {
  const { city } = route.params;

  return (
    <>
      <InfoRow>
        <View>
          <Text>{city}</Text>
          <Text>Sunny</Text>
        </View>
        <View style={styles.badgeWrapper}>
          <Badge>27 °C</Badge>
        </View>
      </InfoRow>
      <InfoRow>
        <Text>Humidity</Text>
        <Text>97%</Text>
      </InfoRow>
      <InfoRow>
        <Text>Pressure</Text>
        <Text>1015 hPa</Text>
      </InfoRow>
      <InfoRow>
        <Text>Wind speed</Text>
        <Text>10 m/s</Text>
      </InfoRow>
      <InfoRow>
        <Text>Cloud cover</Text>
        <Text>45%</Text>
      </InfoRow>
    </>
  );
};
