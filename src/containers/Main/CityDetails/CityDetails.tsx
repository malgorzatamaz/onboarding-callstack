import { ActivityIndicator, Badge } from "react-native-paper";
import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import React from "react";

import { ErrorAlert, InfoRow } from "src/components";
import { RootStackParamList } from "src/containers/Main/MainNavigator";
import { useGetWeatherByCityQuery } from "src/api/weatherApi";

import styles from "./styles";

export const CityDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, "CityDetails">>();
  const city = route.params.city;

  const { data, error, isLoading } = useGetWeatherByCityQuery(city);

  if (isLoading) return <ActivityIndicator animating={true} />;

  if (error) return <ErrorAlert error={error} />;

  const temperature = data?.temperature ? `${data!.temperature} °C` : "-";

  return (
    <>
      <InfoRow>
        <View>
          <Text style={styles.cityName}>{city}</Text>
          <Text style={styles.weatherDescription}>{data?.description}</Text>
        </View>
        <View style={styles.badgeWrapper}>
          <Badge testID="temperature">{temperature}</Badge>
        </View>
      </InfoRow>
      <InfoRow>
        <Text>Humidity</Text>
        <Text testID="humidity">{data?.humidity}%</Text>
      </InfoRow>
      <InfoRow>
        <Text>Pressure</Text>
        <Text testID="pressure">{data?.pressure} hPa</Text>
      </InfoRow>
      <InfoRow>
        <Text>Wind speed</Text>
        <Text testID="windSpeed">{data?.windSpeed} m/s</Text>
      </InfoRow>
      <InfoRow>
        <Text>Cloud cover</Text>
        <Text testID="cloudCover">{data?.cloudCover}%</Text>
      </InfoRow>
    </>
  );
};
