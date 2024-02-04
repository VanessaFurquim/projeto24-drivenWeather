import { useContext } from "react";
import { CurrentWeatherContext } from "../../contexts/CurrentWeatherContext";
import { styled } from "styled-components";

export default function CurrentWeather() {
    const currentWeatherData = useContext(CurrentWeatherContext);
    const currentWeatherCondition = currentWeatherData.currentWeather?.weather?.[0].main;

    const iconApi = {
        iconBaseUrl: "https://openweathermap.org/img/wn/"
      };

    function defineMainColor(currentWeatherCondition) {
        switch (currentWeatherCondition) {
            case "Clear":
                return "#EC6E4C";
            case "Clouds":
                return "darkgray";
            case "Rain":
                return "blue";
            case "Snow":
                return "slategray";
            case "Thunderstorm":
                return "purple";
            case "Drizzle":
                return "lightblue";
            case "Mist":
                return "lightgray";
            default:
                return "red";
        };
    };

    return (
        <>
            <CurrentWeatherStyle style = {{color: defineMainColor(currentWeatherCondition)}}>
                <img src = {`${iconApi.iconBaseUrl}${currentWeatherData?.currentWeather?.weather?.[0].icon}@2x.png`} />
                <h1>{currentWeatherData?.currentWeather?.main.temp.toFixed(0)}</h1>
                <p>°C</p>
            </CurrentWeatherStyle>
            <CurrentWeatherDescription>{currentWeatherData?.currentWeather?.weather?.[0].description}</CurrentWeatherDescription>
        </>
        
    );
};

const CurrentWeatherStyle = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 30px;
    width: 100%;
    height: 8em;

    img {
        width: 8em;
        height: 8em;
        margin-left: 10px;
    };

    h1 {
        font-size: 90px;
    };

    p {
        font-size: 75px;
    };
`;

const CurrentWeatherDescription = styled.p`
    text-align: center;
    font-size: 22px;
`;