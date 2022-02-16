/* eslint-disable no-undef */
import { toBeEmpty, toHaveTextContent } from "@testing-library/jest-native";
expect.extend({ toBeEmpty, toHaveTextContent });

require("jest-fetch-mock").enableMocks();
