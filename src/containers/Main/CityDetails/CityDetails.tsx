import { ActivityIndicator, Badge, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import React from "react";

import { ErrorAlert, InfoRow } from "src/components";
import { RootStackParamList } from "src/containers/Main/MainNavigator";
import { useGetWeatherByCityQuery } from "src/api/weatherApi";

import styles from "./styles";

export const CityDetails = ({
  route,
}: NativeStackScreenProps<RootStackParamList, "CityDetails">) => {
  const { city } = route.params;
  const { data, error, isLoading } = useGetWeatherByCityQuery(city);

  if (isLoading) return <ActivityIndicator animating={true} />;
  if (error) return <ErrorAlert error={error} />;

  return (
    <>
      <InfoRow>
        <View>
          <Text style={styles.cityName}>{city}</Text>
          <Text style={styles.weatherDescription}>{data?.description}</Text>
        </View>
        <View style={styles.badgeWrapper}>
          <Badge>{`${data?.temperature} °C`}</Badge>
        </View>
      </InfoRow>
      <InfoRow>
        <Text>Humidity</Text>
        <Text>{data?.humidity}%</Text>
      </InfoRow>
      <InfoRow>
        <Text>Pressure</Text>
        <Text>{data?.pressure} hPa</Text>
      </InfoRow>
      <InfoRow>
        <Text>Wind speed</Text>
        <Text>{data?.windSpeed} m/s</Text>
      </InfoRow>
      <InfoRow>
        <Text>Cloud cover</Text>
        <Text>{data?.cloudCover}%</Text>
      </InfoRow>
    </>
  );
};
