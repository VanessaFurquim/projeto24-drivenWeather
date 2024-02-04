import { useContext } from "react";
import { CurrentWeatherContext } from "../contexts/CurrentWeatherContext";
import { styled } from "styled-components";
import { CiSearch } from "react-icons/ci";

export default function CitySearchBar() {
    const currentWeatherData = useContext(CurrentWeatherContext);
    
    function handleInputChange(event) {
        currentWeatherData.setCity("manaus");
    };
      
    return (
        <SearchContainer>
            <SearchInput
                type = "text"
                placeholder = "Procure por uma cidade"
                id = "searchedCity"
                onChange = { (event) => handleInputChange(event) }
            />
            <SearchIcon className = "search-icon" />
        </SearchContainer>
    );
};

const SearchContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 390px;
    margin-top: 45px;
`;

const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    outline: none;
    box-shadow: 0 24px 48px 0 rgb(49 79 124 / 10%);
    border-color: transparent;
    border-radius: 15px;
    background-color: #EDEDEF;
    padding-left: 45px;
    
    &::placeholder {
        font-size: 17px;
        color: #424243;
    };
`;

const SearchIcon = styled(CiSearch)`
    position: absolute;
    left: 30px;
    width: 22px;
    height: 100%;
    color: #8B9CAF;
    margin-left: 10px;
`;