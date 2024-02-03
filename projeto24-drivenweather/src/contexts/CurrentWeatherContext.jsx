import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CurrentWeatherContext = createContext();

export const CurrentWeatherDataProvider = ( { children } ) => {
    const [city, setCity] = useState("são paulo");
    const [currentWeather, setCurrentWeather] = useState(null);

    async function getCurrentWeatherData() {
        const currentWeatherApiUrl = `${import.meta.env.VITE_API_BASE_URL}weather?q=${city}&lang=pt_br&APPID=${import.meta.env.VITE_API_KEY}&units=metric`;

        axios.get(currentWeatherApiUrl)
            .then((response) => {
                setCurrentWeather(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getCurrentWeatherData(setCurrentWeather);
    }, [city]);

    return (
        <CurrentWeatherContext.Provider value = { { currentWeather, setCurrentWeather, setCity } } >
            { children }
        </CurrentWeatherContext.Provider>
    );
};