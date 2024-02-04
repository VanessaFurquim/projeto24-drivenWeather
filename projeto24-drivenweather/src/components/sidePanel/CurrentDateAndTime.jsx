import dayjs from "dayjs";
import { styled } from "styled-components";

export default function CurrentDateAndTime() {
    
    function defineWeekdayPortuguese() {
        const weekday = dayjs().format("dddd");

        switch (weekday) {
            case "Monday":
                return "Segunda-feira";
            case "Tuesday":
                return "Terça-feira";
            case "Wednesday":
                return "Quarta-feira";
            case "Thursday":
                return "Quinta-feira";
            case "Friday":
                return "Sexta-feira";
            case "Saturday":
                return "Sãbado";
            case "Sunday":
                return "Domingo";
            default:
                return "";
        };
    };

    return (
        <DateAndTimeStyle>
            <p>{dayjs().format("DD/MM/YYYY")}</p>
            <p>{defineWeekdayPortuguese()}</p>
        </DateAndTimeStyle>
    );
};

const DateAndTimeStyle = styled.div`
    width: 100%;
    margin-top: 40px;
    text-align: center;
    font-size: 15px;
`;