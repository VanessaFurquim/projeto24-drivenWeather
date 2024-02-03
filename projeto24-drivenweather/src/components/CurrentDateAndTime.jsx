import dayjs from "dayjs";

export default function CurrentDateAndTime() {
    function weekdayPortuguese() {
        const weekday = dayjs().format("dddd");
        
        switch (weekday) {
            case 'Monday':
              return 'Segunda-feira';
            case 'Tuesday':
              return 'Terça-feira';
            case 'Wednesday':
              return 'Quarta-feira';
            case 'Thursday':
              return 'Quinta-feira';
            case 'Friday':
              return 'Sexta-feira';
            case 'Saturday':
              return 'Sábado';
            case 'Sunday':
              return 'Domingo';
            default:
              return '';
        };
    };

    return (
        <>
            <p>{dayjs().format("DD/MM/YYYY")}</p>
            <p>{weekdayPortuguese()}</p>
        </>
    );
};