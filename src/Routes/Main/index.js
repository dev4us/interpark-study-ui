import React, { useState } from "react";
import styled, {css} from "styled-components";

import { MdSearch } from "react-icons/md";

import Footer from "../../Components/Footer";
import Card from "../../Components/Card";

import image1 from "../../Assets/Images/dt_image1.jpg";
import image2 from "../../Assets/Images/dt_image2.jpg";
import image3 from "../../Assets/Images/dt_image3.jpg";
import image4 from "../../Assets/Images/dt_image4.jpg";
import image5 from "../../Assets/Images/dt_image5.jpg";

const Main = () => {
  const [searchText, handleSearchText] = useState("");

  return (
    <>
      <Container>
        <TitleFrame>
          시원한 여행지
          <br />
          찾기.
        </TitleFrame>
        <SearchFrame>
          <SearchInput
            type="text"
            value={searchText}
            placeholder="도시 입력"
            onChange={e => handleSearchText(e.target.value)}
          />
          <SearchBtnFrame>
            <SearchBtn />
          </SearchBtnFrame>
        </SearchFrame>
        <RecentlyPhotoReviewMainFrame>
          <RecentlyPhotoReview thumbnail={image1}>
            <RecentlyPhotoReviewDetailFrame>
              <RecentlyPhotoReviewTitle>야생의<br />그 중심!</RecentlyPhotoReviewTitle>
              <RecentlyPhotoReviewSub>세부, 보라카이 등</RecentlyPhotoReviewSub>
            </RecentlyPhotoReviewDetailFrame>
          </RecentlyPhotoReview>
          <RecentlyPhotoReview thumbnail={image2}>
            <RecentlyPhotoReviewDetailFrame>
              <RecentlyPhotoReviewTitle>전통<br />건축양식</RecentlyPhotoReviewTitle>
              <RecentlyPhotoReviewSub>세부, 보라카이 등</RecentlyPhotoReviewSub>
            </RecentlyPhotoReviewDetailFrame>
          </RecentlyPhotoReview>
          <RecentlyPhotoReview thumbnail={image3}>
            <RecentlyPhotoReviewDetailFrame>
              <RecentlyPhotoReviewTitle>자연 속<br />힐링</RecentlyPhotoReviewTitle>
              <RecentlyPhotoReviewSub>세부, 보라카이 등</RecentlyPhotoReviewSub>
            </RecentlyPhotoReviewDetailFrame>
          </RecentlyPhotoReview>
          <RecentlyPhotoReview thumbnail={image4}>
            <RecentlyPhotoReviewDetailFrame>
              <RecentlyPhotoReviewTitle>시원한<br />열대야</RecentlyPhotoReviewTitle>
              <RecentlyPhotoReviewSub>세부, 보라카이 등</RecentlyPhotoReviewSub>
            </RecentlyPhotoReviewDetailFrame>
          </RecentlyPhotoReview>
          <RecentlyPhotoReview thumbnail={image5}>
            <RecentlyPhotoReviewDetailFrame>
              <RecentlyPhotoReviewTitle>유람선<br />여행!</RecentlyPhotoReviewTitle>
              <RecentlyPhotoReviewSub>세부, 보라카이 등</RecentlyPhotoReviewSub>
            </RecentlyPhotoReviewDetailFrame>
          </RecentlyPhotoReview>                                      
        </RecentlyPhotoReviewMainFrame>
        <HotterReviewFrame>
          <HotterReviewTitle>최근 핫한 리뷰</HotterReviewTitle>
          <Card></Card>
        </HotterReviewFrame>
      </Container>
      <Footer/>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500%;
  /* justify-content: center;
  align-items: center; */
  padding: 1rem;
`;

const TitleFrame = styled.div`
  width: 100%;
  font-size: 1.8em;
  font-weight: bold;
  color: black;
  line-height: 1.2;
  margin-bottom: 2rem;
`;

const SearchFrame = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 85%;
  font-size: 2rem;
  color: #a9a9a9;
  height: 3rem;
  border: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dcdcdc;
    font-weight:bold;
  }
`;

const SearchBtnFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
  color:#dcdcdc;
`;

const SearchBtn = styled(MdSearch)`
  font-size: 2rem;
  color: #a9a9a9;
`;

const RecentlyPhotoReviewMainFrame = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const RecentlyPhotoReview = styled.div`
  display: inline-block;
  width: 8rem;
  height: 14rem;
  margin-right: 1rem;
  border-radius: 5px;
  ${props => props.thumbnail !== "" && css`
    background:url('${props => props.thumbnail}');
    background-size:100% 100%;
  `}
`;

const RecentlyPhotoReviewDetailFrame = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:column;
  justify-content:flex-end;
  padding-left:1rem;
  padding-bottom:2rem;
`;

const RecentlyPhotoReviewTitle = styled.div`
  color:white;
  font-size:1rem;
  margin-bottom:1rem;
  font-weight:bold;
`;

const RecentlyPhotoReviewSub = styled.div`
  color:white;
  font-size:0.8rem;
`;

const HotterReviewFrame = styled.div`
  margin-top:2rem;
`;

const HotterReviewTitle = styled.div`
  font-size:1rem;
  font-weight:bold;
  margin-bottom:2rem;
`;

export default Main;
