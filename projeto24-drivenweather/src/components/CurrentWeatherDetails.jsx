import { useContext } from "react";
import { CurrentWeatherContext } from "../contexts/CurrentWeatherContext";

export default function CurrentWeatherDetails() {
    const currentWeatherData = useContext(CurrentWeatherContext);

    return (
        <>
          <div>
            <div>
              <p>Mínima</p>
              <h3>
                {currentWeatherData?.currentWeather?.main.temp_min}
              </h3>
            </div>
    
            <div>
              <p>Máxima</p>
              <h3>
                {currentWeatherData?.currentWeather?.main.temp_max}
              </h3>
            </div>
    
            <div>
              <p>Umidade</p>
              <h3>{currentWeatherData?.currentWeather?.main.humidity}%</h3>
            </div>
    
            <div>
              <p>Velocidade do vento</p>
              <h3>
                {currentWeatherData?.currentWeather?.wind.speed} m/s
              </h3>
            </div>
          </div>
    
          <div>
            {currentWeatherData?.currentWeather?.main.temp_min < 17 || currentWeatherData?.currentWeather?.main.temp_max < 17
              ? "Você deve levar um casaquinho!"
              : "Não, você não deve levar um casaquinho!"}
          </div>
        </>
      );
};