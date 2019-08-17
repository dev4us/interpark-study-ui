import React, {useState} from "react";
import styled, {css} from "styled-components";

import { GoPlusSmall } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";

import LineHeader from "../../Components/LineHeader";

import avatar from "../../Assets/Images/avatar.jpg";

const SignUp = () => {
  const [isUpload, handleUpload] = useState(false);
  return (
    <>
      <Container>
        <LineHeader />
        <TitleFrame>
          <MainTitle>Hello!</MainTitle>
          <SubTitle>회원가입 후 다양한 여행 정보를 즐겨볼까요?</SubTitle>
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
          </SignUpFrame>
        </TitleFrame>
      </Container>
    </>
  );
};

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
`;

const ProfileImage = styled.div`
  position:relative;
  width:3rem;
  height:3rem;
  background:#dcdcdc;
  border-radius:100px;
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

export default SignUp;
