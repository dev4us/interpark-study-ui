import React from "react";
import styled from "styled-components";

import BackgroundSlider from "react-background-slider";

import image1 from "../../Assets/Images/image1.jpg";
import image2 from "../../Assets/Images/image2.jpg";
import image3 from "../../Assets/Images/image3.jpg";
import image4 from "../../Assets/Images/image4.jpg";
import image5 from "../../Assets/Images/image5.jpg";
import image6 from "../../Assets/Images/image6.jpg";

import kakaoLogin from "../../Assets/Images/kakao_login.png";

const Intro = () => {
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
            <KakaoLoginBtn src={kakaoLogin} />
          </LoginFrame>
        </MainFrame>
      </Container>
    </>
  );
};

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
  justify-content: center;
  width: 100%;
`;

const KakaoLoginBtn = styled.img`
  width: 80%;
  height: 3rem;
`;

export default Intro;
