import React from "react";
import styled, {css} from "styled-components";

import { MdPeople, MdMap, MdTextsms } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container>
        <StickyBar>
          <FooterFrame>
            <FooterIcon active="active"><MdTextsms /></FooterIcon>
            <FooterIcon active=""><MdMap/></FooterIcon>
            <FooterIcon active=""><FaPlusCircle/></FooterIcon>
            <FooterIcon active=""><MdPeople/></FooterIcon>
          </FooterFrame>
         </StickyBar>
      </Container> 
    </>
  );
}

const Container = styled.div`
  position:sticky;
  width:100%;
  bottom:0;
  z-index:9999;
`;

const StickyBar = styled.div`
  width:100%;
  height:3rem;
  background:white;
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