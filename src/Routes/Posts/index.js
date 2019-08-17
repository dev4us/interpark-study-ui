import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";

const Posts = ({location}) => {
  return (
    <>
      <Container>
        개발 예정 ^0- 찡긋!
      </Container>
      <Footer location={location}/>
    </>
  );
};

const Container = styled.div`
  width:100%;
  height:100%;
`;

export default Posts;
