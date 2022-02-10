import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Weather, WeatherResponse } from "src/types";

//Should be the env variable
const API_KEY = "f551018c63bc5e28c8f313c99c0b43d5";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org`,
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<Weather, string>({
      query: (name) =>
        `/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`,
      transformResponse: (response: WeatherResponse): Weather => ({
        cloudCover: response?.clouds?.all,
        description: response?.weather?.[0]?.description,
        humidity: response?.main.humidity,
        pressure: response?.main.pressure,
        temperature: response?.main.temp,
        windSpeed: response?.wind?.speed,
      }),
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
