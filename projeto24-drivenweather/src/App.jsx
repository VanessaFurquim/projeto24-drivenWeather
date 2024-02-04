import styled from "styled-components";
import { CurrentWeatherDataProvider } from "./contexts/CurrentWeatherContext";
import SidePanel from "./pageSections/SidePanel";
import MainPanel from "./pageSections/MainPainel";

export default function App() {

    return (
        <CurrentWeatherDataProvider>
            <HomePageContainer>
                <SidePanel />
                <MainPanel />
            </HomePageContainer>
        </CurrentWeatherDataProvider>
    );
};

const HomePageContainer = styled.main`
    background-color: #EFEFEF;
    display: flex;
`;