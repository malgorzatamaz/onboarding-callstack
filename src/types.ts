export type Weather = {
  cloudCover: number;
  description: string;
  humidity: number;
  temperature: number;
  windSpeed: number;
  pressure: number;
};

export type WeatherResponse = {
  clouds: {
    all: number;
  };
  main: {
    humidity: number;
    pressure: number;
    temp: number;
  };
  weather: { description: string }[];
  wind: {
    speed: number;
  };
  visibility: number;
};
