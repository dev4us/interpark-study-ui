import React from "react";
import styled, {css} from "styled-components";
import { Link, withRouter } from "react-router-dom";

import { MdPeople, MdMap, MdTextsms } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";

const Footer = ({location}) => {
  const locationPath = location.pathname;

  return (
    <>
      <Container>
        <StickyBar>
          <FooterFrame>
            <FooterIcon to="/main" active={locationPath === '/main' ? 'active' : ''}><MdTextsms /></FooterIcon>
            <FooterIcon to="/posts" active={locationPath === '/posts' ? 'active' : ''}><MdMap/></FooterIcon>
            <FooterIcon to="/write" active={locationPath === '/write' ? 'active' : ''}><FaPlusCircle/></FooterIcon>
            <FooterIcon to="/mypage" active={locationPath === '/mypage' ? 'active' : ''}><MdPeople/></FooterIcon>
          </FooterFrame>
         </StickyBar>
      </Container> 
    </>
  );
}
export default withRouter(Footer);

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

const FooterIcon = styled(Link)`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  flex:0.25;
  font-size:1.2rem;
  color:#b3b2b2;

  ${props => props.active !== '' && css`
    color:#424242;
    border-bottom:3px solid #0978fe;
    padding-top:3.2px;
  `}
`;
