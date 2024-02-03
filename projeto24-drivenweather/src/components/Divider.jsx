import { styled } from "styled-components";

export default function Divider() {

    return (
        <SeparateLine />
    );
};

const SeparateLine = styled.div`
  width: 70%;
  height: 2px;
  background: lightgray;
  margin: 20px 0px 30px 0px;
`;