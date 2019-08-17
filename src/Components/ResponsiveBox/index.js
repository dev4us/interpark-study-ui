import React from "react";
import styled from "styled-components";

const ResponsiveBox = ({contents}) => {
  return (
    <>
      <Container>
        <Board>
          {contents}
        </Board>
      </Container>
    </>
  );
}

export default ResponsiveBox;

const Container = styled.div`
  display:flex;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  background:#94ea93;
`;

const Board = styled.div`
  width: 360px;
  height: 640px;
  background:white;

  @media only screen and (max-width: 785px){
    width:100vw;
    height:100vh;
  }
`;


