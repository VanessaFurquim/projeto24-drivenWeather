import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const WeatherForecastContext = createContext();

export const WeatherForecastDataProvider = ( { children } ) => {
    const [city, setCity] = useState("são paulo");
    const [weatherForecast, setWeatherForecast] = useState(null);

    async function getWeatherForecastData() {
        const weatherForecastApiUrl = `${import.meta.env.VITE_API_BASE_URL}forecast?q=${city}&lang=pt_br&APPID=${import.meta.env.VITE_API_KEY}&units=metric`;

        axios.get(weatherForecastApiUrl)
            .then((response) => {
                setWeatherForecast(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getWeatherForecastData(setWeatherForecast);
    }, [city]);

    return (
        <WeatherForecastContext.Provider value = { { weatherForecast, setWeatherForecast, setCity } } >
            { children }
        </WeatherForecastContext.Provider>
    );
};