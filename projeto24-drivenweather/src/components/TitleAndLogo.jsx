import { styled } from "styled-components";
import coatIcon from "../assets/casaco.png"

export default function TitleAndLogo() {

    return (
        <TitleContainer>
            <CoatIcon
            alt = "coat-icon"
            src = {coatIcon} />
            <TitleText>Levo um casaquinho?</TitleText>
        </TitleContainer>
    );
};

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const TitleText = styled.h1`
    font-size: 2.3em;
    font-weight: 600;
    text-align: left;
    line-height: 0.8;
    letter-spacing: 2px;
    padding-left: 6px;
`;

const CoatIcon = styled.img`
    width: 22%;
`;