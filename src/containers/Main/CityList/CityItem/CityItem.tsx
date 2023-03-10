import {
  ActivityIndicator,
  Image,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Badge } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";

import { RootStackParamList } from "src/containers/Main/MainNavigator";
import { useGetWeatherByCityQuery } from "src/api/weatherApi";

import { colors } from "src/styles";
import styles from "./styles";

type CityItemProps = {
  city: string;
};

export const CityItem: FC<CityItemProps> = ({ city }) => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { data, error, isLoading } = useGetWeatherByCityQuery(city);

  return (
    <TouchableHighlight
      testID="cityRow"
      accessibilityRole="button"
      style={styles.itemWrapper}
      underlayColor={colors.secondary}
      onPress={() => navigate("CityDetails", { city })}
    >
      <View style={styles.row}>
        <Text style={styles.cityName}>{city}</Text>
        {isLoading ? (
          <ActivityIndicator animating={true} />
        ) : (
          <View style={styles.badgeWrapper}>
            <Badge>
              {error
                ? "Something went wrong"
                : data?.temperature
                ? `${data!.temperature} °C`
                : "-"}
            </Badge>
          </View>
        )}
        <Image
          style={styles.nextIcon}
          source={require("src/assets/next.png")}
          accessibilityIgnoresInvertColors
        />
      </View>
    </TouchableHighlight>
  );
};
