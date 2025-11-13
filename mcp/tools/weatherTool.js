export const WeatherTool = {
    name: "getWeather",
    description: "Fetch weather info for a city",
    parameters: {
      city: "string",
    },
    async execute({ city }) {
      return `Weather in ${city} is 28°C and sunny 🌞`;
    },
  };
  