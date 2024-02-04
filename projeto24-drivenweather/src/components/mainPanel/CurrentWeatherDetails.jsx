import { useContext } from "react";
import { CurrentWeatherContext } from "../../contexts/CurrentWeatherContext";
import { styled } from "styled-components";

export default function CurrentWeatherDetails() {
    const currentWeatherData = useContext(CurrentWeatherContext);

    return (
        <>
            <CellsContainerStyle>
            <InformationCellStyle>
                <p>Mínima</p>
                <h3>
                {Math.round(currentWeatherData?.currentWeather?.main.temp_min)}°C
                </h3>
            </InformationCellStyle>
            <InformationCellStyle>
                <p>Máxima</p>
                <h3>
                    {Math.round(currentWeatherData?.currentWeather?.main.temp_max)}°C
                </h3>
            </InformationCellStyle>
            <InformationCellStyle>
                <p>Umidade</p>
                <h3>{currentWeatherData?.currentWeather?.main.humidity}%</h3>
            </InformationCellStyle>
            <InformationCellStyle>
                <p>Vento</p>
                <h3>
                    {currentWeatherData?.currentWeather?.wind.speed} m/s
                </h3>
            </InformationCellStyle>
            </CellsContainerStyle>
            <CoatAdviceStatementStyle>
            {
                currentWeatherData?.currentWeather?.main.temp_min < 17 || currentWeatherData?.currentWeather?.main.temp_max < 17 ?
                    "Você deve levar um casaquinho!"
                    : "Não, você não deve levar um casaquinho!"
            }
            </CoatAdviceStatementStyle>
        </>
    );
};

const CellsContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    /* margin-bottom: 25px; */
`;

const InformationCellStyle = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 80px;
    box-shadow: 0px 24px 48px 0px rgba(49, 79, 124, 0.08);
    border-radius: 20px;
    margin: 10px 0;
    background: linear-gradient(117deg, #4D4495 25%, #4F43AE 90%);

    p {
    margin: 8px 0;
    font-size: 1vw;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 0.6px;
    color: #FFFFFF;
    };

    h3 {
        font-size: 2vw;
        font-weight: 600;
        letter-spacing: 1.2px;
        line-height: 30px;
        color: #FFFFFF;
    };
`;

const CoatAdviceStatementStyle = styled.div`
    font-size: 1.1em;
    font-style: italic;
    color: #AFADAD;
`;