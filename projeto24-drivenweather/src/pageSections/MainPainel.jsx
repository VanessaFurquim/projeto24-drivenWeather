import CurrentWeatherDetails from "../components/CurrentWeatherDetails";
import LocationInformation from "../components/LocationInformation";
import WeatherForecastGraph from "../components/WeatherForecastGraph";
import { WeatherForecastDataProvider } from "../contexts/WeatherForecastContext";


export default function MainPanel() {
    return (
        <>
            <LocationInformation />
            <CurrentWeatherDetails />
            <WeatherForecastDataProvider>
                <WeatherForecastGraph />
            </WeatherForecastDataProvider>
        </>
    );  
};