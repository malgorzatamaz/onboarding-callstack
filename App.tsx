import React from "react";
import { SafeAreaView } from "react-native";

import { CitiesList } from "./src/containers/CitiesList/CitiesList";

const App = () => {
  return (
    <SafeAreaView>
      <CitiesList />
    </SafeAreaView>
  );
};

export default App;
