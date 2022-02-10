import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import React from "react";

const middlewares = getDefaultMiddleware();
const mockStore = createMockStore(middlewares);
const store = mockStore();

export const MockedProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
