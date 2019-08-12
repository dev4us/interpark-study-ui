import React from "react";
import styled, {css} from "styled-components";

import { MdPeople, MdTagFaces   } from "react-icons/md";
import { FaGlobe, FaPlusCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container>
        <FooterFrame>
          <FooterIcon active="active"><MdPeople/></FooterIcon>
          <FooterIcon active=""><MdTagFaces/></FooterIcon>
          <FooterIcon active=""><FaGlobe/></FooterIcon>
          <FooterIcon active=""><FaPlusCircle/></FooterIcon>
        </FooterFrame>
      </Container>
    </>
  );
}

const Container = styled.div`
  position:fixed;
  width:100%;
  bottom:0;
  height:3rem;
  background:white;
  z-index:9999;
`;

const FooterFrame = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
`;

const FooterIcon = styled.div`
  text-align:center;
  flex:0.25;
  font-size:1.2rem;
  color:#b3b2b2;

  ${props => props.active !== '' && css`
    color:#424242;
  `}
`;
export default Footer;