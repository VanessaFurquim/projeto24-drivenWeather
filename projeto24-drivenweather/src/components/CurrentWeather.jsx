import { useContext } from "react";
import { CurrentWeatherContext } from "../contexts/CurrentWeatherContext";

export default function CurrentWeather() {
    const currentWeatherData = useContext(CurrentWeatherContext);

    const api = {
        iconBase: "https://openweathermap.org/img/wn/",
      };

    return (
        <>
            <img src = {`${api.iconBase}${currentWeatherData?.currentWeather?.weather?.[0].icon}@2x.png`} />
            <h1>{currentWeatherData?.currentWeather?.main.temp}°C</h1>
            <p>{currentWeatherData?.currentWeather?.weather?.[0].description}</p>
        </> 
    );
};