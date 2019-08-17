import React from "react";
import styled, {keyframes} from "styled-components";
import { withRouter } from "react-router-dom";

// import BackgroundSlider from "react-background-slider";

import { MdAccountCircle, MdLock } from "react-icons/md";

import image1 from "../../Assets/Images/image1.jpg";
import image2 from "../../Assets/Images/image2.jpg";
import image3 from "../../Assets/Images/image3.jpg";
import image4 from "../../Assets/Images/image4.jpg";
import image5 from "../../Assets/Images/image5.jpg";
import image6 from "../../Assets/Images/image6.jpg";

const Intro = ({history}) => {
  return (
    <>
      <Container>
        <BackgroundSlider
          images={[image1, image2, image3, image4, image5, image6]}
        />
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
            <ActiveBtn bgColor="#0074da" onClick={() => history.push({pathname: "/main"})}>로그인</ActiveBtn>
            <ActiveBtn bgColor="#31a0ff" onClick={() => history.push({pathname: "/main"})}>회원가입</ActiveBtn>
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

export default withRouter(Intro);

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
    background-image:url('//github.com/dev4us/interpark-study-ui/blob/master/src/Assets/Images/bgSlider1.jpg?raw=true');
   }
   25% {
    background-image:url('//github.com/dev4us/interpark-study-ui/blob/master/src/Assets/Images/bgSlider5.jpg?raw=true');
   }
   50% {
    background-image:url('//github.com/dev4us/interpark-study-ui/blob/master/src/Assets/Images/bgSlider2.jpg?raw=true');
   }
   75% {
    background-image:url('//github.com/dev4us/interpark-study-ui/blob/master/src/Assets/Images/bgSlider3.jpg?raw=true');
   }
   100% {
    background-image:url('//github.com/dev4us/interpark-study-ui/blob/master/src/Assets/Images/bgSlider4.jpg?raw=true');
   }
`;

const BackgroundSlider = styled.div`
  position:absolute;
  z-index:0;
  width:100%;
  height:100%;
  background-size:cover;
  animation: ${bgSlider} 10s infinite linear;
`;




