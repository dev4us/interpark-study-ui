import React from "react";
import styled, {css} from "styled-components";

import Carousel from 'nuka-carousel';

import image1 from "../../Assets/Images/dt_image1.jpg";
import image2 from "../../Assets/Images/dt_image2.jpg";
import image3 from "../../Assets/Images/dt_image3.jpg";
import image4 from "../../Assets/Images/dt_image4.jpg";

const Card = () => {
  return (
    <>
      <Container>
        <CardFrame>
          <DetailFrame>
            <Thumbnail thumbnail={image1}></Thumbnail>
            <InDetailFrame>
              <Location>야생의 그 중심!</Location>
              <Date>2019-08-12 / 마닐라 (필리핀)</Date>
            </InDetailFrame>
          </DetailFrame>
          <PhotoFrame>
            <Carousel
              autoPlay={false}
              width="100%"
              initialSlideHeight={30}
              heightMode="first"
              withoutControls={true}
            >
              <Photo src={image2} alt=""/>
              <Photo src={image2} alt=""/>
              <Photo src={image3} alt=""/>
              <Photo src={image4} alt=""/>
            </Carousel>
          </PhotoFrame>

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

const PhotoFrame = styled.div`
  display:block;
  width:100%;
  height:1rem;
  margin-top:1.2rem;
`;

const Photo = styled.img`
  width:100vw !important;
  height:12rem;
`;

export default Card;