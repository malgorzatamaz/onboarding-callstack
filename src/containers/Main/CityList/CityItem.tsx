import { Badge, Text } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableHighlight, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";

import { colors } from "src/styles";
import { RootStackParamList } from "src/containers/Main/MainNavigator";
import styles from "./styles";

type CityItemProps = {
  city: string;
};

const CityItem: FC<CityItemProps> = ({ city }) => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableHighlight
      style={styles.itemWrapper}
      underlayColor={colors.secondary}
      onPress={() => navigate("CityDetails", { city })}
    >
      <View style={styles.row}>
        <Text style={styles.cityName}>{city}</Text>
        <View style={styles.badgeWrapper}>
          <Badge>27 °C</Badge>
        </View>
        <Image
          style={styles.nextIcon}
          source={require("src/assets/next.png")}
        />
      </View>
    </TouchableHighlight>
  );
};

export default CityItem;
