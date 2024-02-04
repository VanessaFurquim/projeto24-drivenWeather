import { styled } from "styled-components";

export default function Divider() {
    return (
        <DividerStyle />
    );
};

const DividerStyle = styled.div`
    width: 75%;
    height: 3px;
    border-radius: 50px;
    background: #EDEDEF;
    margin: 25px 0 30px 45px;
`;