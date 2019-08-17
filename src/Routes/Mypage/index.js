import React from "react";
import styled from "styled-components";

import Footer from "../../Components/Footer";

const MyPage = ({location}) => {
  return (
    <>
      <Container>
        <Null>개발 예정 ^0- 찡긋!</Null>
        <Footer/>
      </Container>
    </>
  );
};

const Container = styled.div`
  width:100%;
  height:100%;
`;

const Null = styled.div`
  height:100%;
`;

export default MyPage;
