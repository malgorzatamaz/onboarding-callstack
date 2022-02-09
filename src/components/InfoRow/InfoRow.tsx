import { Divider } from "react-native-paper";
import { View } from "react-native";
import React, { FC, ReactNode } from "react";

import styles from "./styles";

type InfoRowProps = {
  children: ReactNode;
};

export const InfoRow: FC<InfoRowProps> = ({ children }) => {
  return (
    <>
      <View style={styles.row}>{children}</View>
      <Divider />
    </>
  );
};
