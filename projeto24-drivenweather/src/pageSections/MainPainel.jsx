import { WeatherForecastDataProvider } from "../contexts/WeatherForecastContext";
import { styled } from "styled-components";
import LocationInformation from "../components/mainPanel/LocationInformation";
import CurrentWeatherDetails from "../components/mainPanel/CurrentWeatherDetails";
import WeatherForecastChart from "../components/mainPanel/WeatherForecastChart";


export default function MainPanel() {
    return (
        <MainPanelStyle>
            <LocationInformation />
            <CurrentWeatherDetails />
            <WeatherForecastDataProvider>
                <WeatherForecastChart />
            </WeatherForecastDataProvider>
        </MainPanelStyle>
    );  
};

const MainPanelStyle = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 65vw;
    padding: 4.5% 3.5%;
`;