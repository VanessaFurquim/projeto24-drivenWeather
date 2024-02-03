import { useContext } from "react";
import { CurrentWeatherContext } from "../contexts/CurrentWeatherContext";

export default function CitySearchBar() {
    const currentWeatherData = useContext(CurrentWeatherContext);
    
    function handleInputChange(event) {
        currentWeatherData.setCity("manaus");
    };
      
    return (
        <div>
            <input
                type = "text"
                placeholder = "Procure por uma cidade"
                id = "searchedCity"
                onChange = { (event) => handleInputChange(event) }
            />
            <img className = "search-icon" />
        </div>
    );
};