import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import React from "react";

import MainNavigator from "src/containers/Main/MainNavigator";

import { theme } from "src/styles/theme";

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
