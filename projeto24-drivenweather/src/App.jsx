import styled from "styled-components";
import { CurrentWeatherDataProvider } from "./contexts/CurrentWeatherContext";
import CurrentWeather from "./components/CurrentWeather";

export default function App() {

    return (
        <CurrentWeatherDataProvider>
           <HomePageContainer>
                <CurrentWeather />
            </HomePageContainer> 
        </CurrentWeatherDataProvider>
    );
};

const HomePageContainer = styled.main`
    background-color: #EFEFEF;
`;