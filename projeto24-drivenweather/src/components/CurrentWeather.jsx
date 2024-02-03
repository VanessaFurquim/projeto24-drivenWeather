import { useContext } from "react";
import { CurrentWeatherContext } from "../contexts/CurrentWeatherContext";

export default function CurrentWeather() {
    const currentWeather = useContext(CurrentWeatherContext);
    console.log(currentWeather)

    return (
        <h1>{JSON.stringify(currentWeather.currentWeather)}</h1>
    );
};