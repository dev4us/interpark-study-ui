import React, {useState} from "react";
import styled, {css} from "styled-components";
import { withRouter } from "react-router-dom";

import { GoPlusSmall } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";

import LineHeader from "../../Components/LineHeader";

import avatar from "../../Assets/Images/avatar.jpg";

const SignUp = ({history}) => {
  const [isUpload, handleUpload] = useState(false);
  return (
    <>
      <Container>
        <LineHeader />
        <TitleFrame>
          <MainTitle>Hello!</MainTitle>
          <SubTitle>회원가입 후 다양한 여행 정보를 즐겨볼까요?</SubTitle>
        </TitleFrame>
        <SignUpFrame>
          <ProfileImage uploaded={isUpload} onClick={() => handleUpload(!isUpload)}>
            <ThumbnailFrame uploadImage={isUpload ? avatar : ''}>
              {
                isUpload === false && (
                  <NoThumbnail />
                )
              }
            </ThumbnailFrame>
            {
                isUpload === false && (
                  <PlusIcon><GoPlusSmall /></PlusIcon>
                )
              }              
          </ProfileImage>
          <InputName>이메일</InputName>
          <InputFrame>
              <InputTag type="text"></InputTag>
          </InputFrame>
          <InputName>닉네임</InputName>
          <InputFrame>
              <InputTag type="text"></InputTag>
          </InputFrame>          
          <InputName>비밀번호</InputName>
          <InputFrame>
              <InputTag type="password"></InputTag>
          </InputFrame>
          <InputName>비밀번호 확인</InputName>
          <InputFrame>
              <InputTag type="password"></InputTag>
          </InputFrame>          
        </SignUpFrame>
        <ConfirmFrame>
          <ConfirmBtn onClick={() => history.push({pathname: "/main"})}>회원가입</ConfirmBtn>
        </ConfirmFrame>
      </Container>
    </>
  );
};

export default withRouter(SignUp);

const Container = styled.div`
  width:100%;
  height:100%;
`;

const TitleFrame = styled.div`
  padding-top:1rem;
  padding-left:1.6rem;
`;

const MainTitle = styled.div`
  font-size:2rem;
  font-weight:bold;
  color:black;
`;

const SubTitle = styled.div`
  font-size:0.9rem;
  color:#a5a5a5;
  margin-top:0.5rem;
`;

const SignUpFrame = styled.div`
  margin-top:2rem;
  padding-left:1.6rem;
  padding-right:1.6rem;
`;

const ProfileImage = styled.div`
  position:relative;
  width:3rem;
  height:3rem;
  background:#dcdcdc;
  border-radius:100px;
  margin-bottom:1.4rem;
`;

const ThumbnailFrame = styled.div`
  display:flex;
  width:100%;
  height:100%;

  ${props => props.uploadImage !== '' && css`
    background-image:url(${props => props.uploadImage});
    background-size:cover;
    border:1px solid #ececec;
    border-radius:100%;
  `}
  ${props => props.uploadImage === '' && css`
    justify-content:center;
    align-items:center;
  `}
`;

const PlusIcon = styled.div`
  position:absolute;
  top: 1.7rem;
  right: -0.3rem;
  display:flex;
  justify-content:center;
  align-items:center;
  width:1.3rem;
  height:1.3rem;
  background:#0978fe;
  border-radius:100px;
  padding-top:0.13rem;
  font-size:1.4rem;
  color:white;
`;

const NoThumbnail = styled(IoMdPerson)`
  font-size:1.2rem;
  color:#676767;
`;

const InputName = styled.div`
  font-size:0.9rem;
  font-weight:medium;
  margin-bottom:0.3rem;
`;

const InputFrame = styled.div`
  display:flex;
  margin-bottom:2rem;
`;

const InputTag = styled.input`
  width:100%;
  padding:0.5rem;
  border:unset;
  border-bottom:1px solid #a5a5a5;

  :focus{
    padding-bottom:0.43rem;
    border-bottom:0.15rem solid #0978fe;
  }
`;

const ConfirmFrame = styled.div`
  width:100%;
  padding-left:1.6rem;
  padding-right:1.6rem;
`;
const ConfirmBtn = styled.button`
  width:100%;
  height:3rem;
  font-size:1.1rem;
  letter-spacing:0.3rem;
  color:white;
  background: #0978fe;
  border:unset;
`;
