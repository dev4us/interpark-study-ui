import React from "react";
import styled, {css} from "styled-components";

import image1 from "../../Assets/Images/dt_image1.jpg";

const Card = () => {
  return (
    <>
      <Container>
        <CardFrame>
          <DetailFrame>
            <Thumbnail thumbnail={image1}></Thumbnail>
            <InDetailFrame>
              <Location>세부</Location>
              <Date>2019-08-12</Date>
            </InDetailFrame>
          </DetailFrame>
        </CardFrame>
      </Container>
    </>
  );
}

const Container = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
`;

const CardFrame = styled.div`
  width:95%;
  min-height:15rem;
`;

const DetailFrame = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  flex:1;
`;

const Thumbnail = styled.div`
  width:3rem;
  height:3rem;
  border-radius:50%;
  background:black;
  margin-right:1rem;

  ${props => props.thumbnail !== '' && css`
    background:url(${props => props.thumbnail});
    background-size:100% 100%;
  `}
`;

const InDetailFrame = styled.div`
  display:flex;
  flex-direction:column;
  align-items:space-around;
  height:100%;
`;

const Location = styled.div`
  font-size:0.8rem;
  margin-bottom:0.3rem;
  font-weight:bold;
  color:#5d5d5d;
`;

const Date = styled.div`
  font-size:0.8rem;
  color:#5d5d5d;
`;

export default Card;