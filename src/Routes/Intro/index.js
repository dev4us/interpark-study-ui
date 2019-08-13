import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import BackgroundSlider from "react-background-slider";

import image1 from "../../Assets/Images/image1.jpg";
import image2 from "../../Assets/Images/image2.jpg";
import image3 from "../../Assets/Images/image3.jpg";
import image4 from "../../Assets/Images/image4.jpg";
import image5 from "../../Assets/Images/image5.jpg";
import image6 from "../../Assets/Images/image6.jpg";

import kakaoLogin from "../../Assets/Images/kakao_login.png";

const Intro = ({history}) => {
  return (
    <>
      <Container>
        <BackgroundSlider
          images={[image1, image2, image3, image4, image5, image6]}
          duration={5}
          transition={2}
        />
        <MainFrame>
          <Title>
            <MainTitle>Untitled</MainTitle>
            <SubTitle>당신의 여행 앱</SubTitle>
          </Title>
          <LoginFrame>
            <KakaoLoginBtn src={kakaoLogin} onClick={() => history.push({pathname: "/main"})}/>
            <SeeMore>서비스 살펴보기</SeeMore>
          </LoginFrame>
        </MainFrame>
      </Container>
    </>
  );
};

export default withRouter(Intro);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 80%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainTitle = styled.div`
  font-size: 4.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-align: right;
`;

const LoginFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 100%;
`;

const KakaoLoginBtn = styled.img`
  width: 80%;
  height: 3rem;
`;

const SeeMore = styled.div`
  color:white;
  font-size:0.5rem;
  text-decoration:underline;
  margin-top:0.5rem;
`;

