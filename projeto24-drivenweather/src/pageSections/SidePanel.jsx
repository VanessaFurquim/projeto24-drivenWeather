import { styled } from "styled-components";
import TitleAndLogo from "../components/sidePanel/TitleAndLogo";
import CitySearchBar from "../components/sidePanel/CitySearchBar";
import CurrentWeather from "../components/sidePanel/CurrentWeather";
import Divider from "../components/sidePanel/Divider";
import CurrentDateAndTime from "../components/sidePanel/CurrentDateAndTime";

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
    width: 35vw;
    height: 100vh;
    padding: 5% 1.4%;
    background-color: #FFFFFF;
`;