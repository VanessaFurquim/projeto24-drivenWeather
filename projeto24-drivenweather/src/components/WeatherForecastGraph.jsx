import { useContext } from "react";
import { WeatherForecastContext } from "../contexts/WeatherForecastContext";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default function WeatherForecastGraph() {
    const weatherForecastData = useContext(WeatherForecastContext);

    const forecastTemperatures = weatherForecastData?.weatherForecast?.list?.map((item) => (
        { datetime: item.dt, temperature: item.main.temp }
    ));

    return (
        <>
           <h1>Próximos dias</h1>
            <LineChart 
                width = {730}
                height = {250}
                data = {forecastTemperatures}
                margin = { { top: 5, right: 30, left: 20, bottom: 5 } } 
            >
                <Line type = "monotone" dataKey = "temperature" stroke = "#4E43A8" />
                <CartesianGrid stroke = "#CCC" />
                <XAxis dataKey = "datetime" />
                <YAxis dataKey = "temperature" />
            </LineChart>
        </>
        
      );
};