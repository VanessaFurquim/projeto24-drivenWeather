import { useContext } from "react";
import { WeatherForecastContext } from "../contexts/WeatherForecastContext";


export default function WeatherForecastGraph() {
    const weatherForecastData = useContext(WeatherForecastContext);

    return (
        <p>
          {JSON.stringify(weatherForecastData)}
        </p>
      );
};