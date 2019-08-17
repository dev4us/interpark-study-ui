import React from "react";
import styled, {keyframes} from "styled-components";

import { MdAccountCircle, MdLock } from "react-icons/md";

import image1 from "../../Assets/Images/bgSlider1.jpg";
import image2 from "../../Assets/Images/bgSlider2.jpg";
import image3 from "../../Assets/Images/bgSlider3.jpg";
import image4 from "../../Assets/Images/bgSlider4.jpg";
import image5 from "../../Assets/Images/bgSlider5.jpg";

const Intro = ({history}) => {
  return (
    <>
      <Container>
        <BackgroundSlider />
        <MainFrame>
          <Title>
            <MainTitle>Untitled</MainTitle>
            <SubTitle>당신의 여행 앱</SubTitle>
          </Title>
          <LoginFrame>
            <InputFrame>
              <UserIcon></UserIcon>
              <InputTag type="text"></InputTag>
            </InputFrame>
            <InputFrame>
              <PwIcon></PwIcon>
              <InputTag type="password"></InputTag>
            </InputFrame>
            <ActiveBtn bgColor="#0978fe" onClick={() => history.push({pathname: "/main"})}>로그인</ActiveBtn>
            <ActiveBtn bgColor="#31a0ff" onClick={() => history.push({pathname: "/signup"})}>회원가입</ActiveBtn>
            <BottomFrame>
              <SeeMore>내 계정 찾기</SeeMore>
              <SeeMore>서비스 약관</SeeMore>
            </BottomFrame>
          </LoginFrame>
        </MainFrame>
      </Container>
    </>
  );
};

export default Intro;

const Container = styled.div`
  display: flex;
  position:relative;
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
  height: 70%;
  z-index:1;
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

const InputFrame = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:80%;
  /* background:#ffffff70; */
  border-bottom:2px solid white;
  margin-bottom:0.5rem;
  /* border-radius:5px; */
  padding-left:0.5rem;
  padding-right:0.5rem;
`;

const InputTag = styled.input`
  width:100%;
  height:2.5rem;
  /* color:#5d5d5d; */
  color:white;
  padding-left:1rem;
  background:none;
  border:none;
`;

const UserIcon = styled(MdAccountCircle)`
  font-size:1.2rem;
  color:white;
`;

const PwIcon = styled(MdLock)`
  font-size:1.2rem;
  color:white;
`;

const ActiveBtn = styled.button`
  width: 80%;
  height: 2.5rem;
  font-size:0.8rem;
  color:white;
  border-radius:5px;
  background:${props => props.bgColor};
  border:none;
  margin-bottom:0.5rem;
`;

const BottomFrame = styled.div`
  display:flex;
  justify-content:space-between;
  width:80%;
  padding-top:0.6rem;
  border-top:1px solid white;
`;

const SeeMore = styled.div`
  color:white;
  font-size:0.7rem;
  text-align:center;
  width:50%;

  :first-child{
    border-right:1px solid white;
  }
`;

const bgSlider  = keyframes`
   0% {
    background-image:url(${image1});
   }
   25% {
    background-image:url(${image5});
   }
   50% {
    background-image:url(${image2});
   }
   75% {
    background-image:url(${image3});
   }
   100% {
    background-image:url(${image4});
   }
`;

const BackgroundSlider = styled.div`
  position:absolute;
  z-index:0;
  width:100%;
  height:100%;
  background-size:100% 100%;
  animation: ${bgSlider} 15s infinite linear;
`;




