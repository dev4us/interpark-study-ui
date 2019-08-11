import React, { useState } from "react";
import styled from "styled-components";

import { MdSearch } from "react-icons/md";

const Main = () => {
  const [searchText, handleSearchText] = useState("");

  return (
    <>
      <Container>
        <TitleFrame>
          시원한 여름 여행지
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
          <RecentlyPhotoReview>1</RecentlyPhotoReview>
          <RecentlyPhotoReview>2</RecentlyPhotoReview>
          <RecentlyPhotoReview>3</RecentlyPhotoReview>
          <RecentlyPhotoReview>4</RecentlyPhotoReview>
          <RecentlyPhotoReview>5</RecentlyPhotoReview>
        </RecentlyPhotoReviewMainFrame>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* justify-content: center;
  align-items: center; */
  padding: 1rem;
`;

const TitleFrame = styled.div`
  width: 100%;
  font-size: 2rem;
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

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a9a9a9;
  }
`;

const SearchBtnFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
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
  border: 1px solid black;
  border-radius: 5px;
`;

export default Main;
