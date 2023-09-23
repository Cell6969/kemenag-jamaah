import axios from "axios";

export const getWeather = async () => {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=21.4266&longitude=39.8256&hourly=temperature_2m,relativehumidity_2m,rain,windspeed_10m&forecast_days=1"
    );
    return response.data.hourly;
  } catch (error) {
    console.log("error fetching weather", error);
    return null;
  }
};
