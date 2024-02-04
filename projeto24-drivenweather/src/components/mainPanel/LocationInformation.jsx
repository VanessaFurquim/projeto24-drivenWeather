import { useContext } from "react";
import { CurrentWeatherContext } from "../../contexts/CurrentWeatherContext";
import { styled } from "styled-components";

export default function LocationInformation() {
    const currentWeatherData = useContext(CurrentWeatherContext);

    return (
        <LocationInformationStyle>
            <h3>Previsão do tempo para...</h3>
            <h1>{currentWeatherData?.currentWeather?.name}</h1>
            <CoordenatesStyle>
                <p>Latitude: {currentWeatherData?.currentWeather?.coord?.lat.toFixed(2)}°</p>
                <p>Longitude: {currentWeatherData?.currentWeather?.coord?.lon.toFixed(2)}°</p>
            </CoordenatesStyle>
        </LocationInformationStyle>
    );
};

const LocationInformationStyle = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 1.3em;
        letter-spacing: 1.8;
    };

    h1 {
        font-size: 4em;
        line-height: 1;
        letter-spacing: 1.8;
    };

    p {
        font-size: 0.83em;
    };
`;

const CoordenatesStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 16em;
`;