import styled from "styled-components";
import { CurrentWeatherDataProvider } from "./contexts/CurrentWeatherContext";
import CurrentWeather from "./components/CurrentWeather";
import LocationInformation from "./components/LocationInformation";
import TitleAndLogo from "./components/TitleAndLogo";
import Divider from "./components/Divider";
import CurrentDateAndTime from "./components/CurrentDateAndTime";
import CurrentWeatherDetails from "./components/CurrentWeatherDetails";
import { WeatherForecastDataProvider } from "./contexts/WeatherForecastContext";
import WeatherForecastGraph from "./components/WeatherForecastGraph";

export default function App() {

    return (
        <>
            <CurrentWeatherDataProvider>
                <HomePageContainer>
                    <TitleAndLogo />
                    <LocationInformation />
                    <CurrentWeather />
                    <Divider />
                    <CurrentDateAndTime />
                    <CurrentWeatherDetails />
                </HomePageContainer>
            </CurrentWeatherDataProvider>

            <WeatherForecastDataProvider>
                <WeatherForecastGraph />
            </WeatherForecastDataProvider>
        </>
        
    );
};

const HomePageContainer = styled.main`
    /* background-color: #EFEFEF; */
    background-color: white;

`;