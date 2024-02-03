import { useContext } from "react";
import { CurrentWeatherContext } from "../contexts/CurrentWeatherContext";

export default function LocationInformation() {
    const currentWeatherData = useContext(CurrentWeatherContext);

    return (
        <>
            <h3>Previsão do tempo para...</h3>
            <h1>{currentWeatherData?.currentWeather?.name}</h1>
            <p>Longitude: {currentWeatherData?.currentWeather?.coord?.lon}</p>
            <p>Latitude: {currentWeatherData?.currentWeather?.coord?.lat}</p>
        </>
    );
};