import { styled } from "styled-components";
import CitySearchBar from "../components/CitySearchBar";
import CurrentDateAndTime from "../components/CurrentDateAndTime";
import CurrentWeather from "../components/CurrentWeather";
import Divider from "../components/Divider";
import TitleAndLogo from "../components/TitleAndLogo";

export default function SidePanel() {
    return (
        <SidePanelStyle>
            <TitleAndLogo />
            <CitySearchBar />
            <CurrentWeather />
            <Divider />
            <CurrentDateAndTime />
        </SidePanelStyle>
    );  
};

const SidePanelStyle = styled.div`
    width: 40vw;
    height: 100vh;
    padding: 5% 1.4%;
    background-color: #FFFFFF;
`;