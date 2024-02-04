import { useContext } from "react";
import { WeatherForecastContext } from "../../contexts/WeatherForecastContext";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { styled } from "styled-components";
import dayjs from "dayjs";

export default function WeatherForecastGraph() {
    const weatherForecastData = useContext(WeatherForecastContext);

    const forecastTemperatures = weatherForecastData?.weatherForecast?.list?.map((item) => (
        { datetime: dayjs(item.dt).format("DD/MM (ddd)"), temperature: item.main.temp }
    ));

    return (
        <>
           <PhraseStyle>Próximos dias</PhraseStyle>
           <ChartContainer>
                <LineChart 
                width = {730}
                height = {250}
                data = {forecastTemperatures}
                margin = { { top: 5, right: 20, left: 20, bottom: 5 } }
                >
                <Line
                    type = "monotone"
                    dataKey = "temperature"
                    stroke = "#4E43A8"
                />
                <CartesianGrid stroke = "#EFEFEF"  />
                <XAxis
                    dataKey = "datetime"
                    fontSize = {10}
                    interval = {"equidistantPreserveStart"}
                    tick = {{ fill: "###A9A9A9"}}
                    tickFormatter = {(value) => value}
                />
                <YAxis
                    dataKey = "temperature"
                    fontSize = {10}
                    tick = {{ fill: "##A9A9A9"}}
                    tickCount = {10}
                    tickFormatter = {(value) => `${value}°C`}

                />
                <Tooltip
                    formatter = {(value) => `${value.toFixed(0)}°C`}
                    viewBox = { {x: 0, y: 0, width: 40, height: 40} }
                />
                </LineChart>
           </ChartContainer>
            
        </>
        
    );
};

const PhraseStyle = styled.h1`
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 25px;
`;

const ChartContainer = styled.div`
    padding-top: 20px;
    background-color: white;
`;