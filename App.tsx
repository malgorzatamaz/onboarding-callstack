import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import React from "react";

import { store } from "src/store";
import { theme } from "src/styles/theme";
import MainNavigator from "src/containers/Main/MainNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
