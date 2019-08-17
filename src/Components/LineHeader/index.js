import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { MdKeyboardArrowLeft } from "react-icons/md";


const LineHeader = ({history}) => {
  return (
    <>
      <Container>
        <HistoryBackArrow onClick={() => history.push({pathname: "/"})}/>
      </Container>
    </>
  );
};

const Container = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  height:3rem;
  padding-top: 0.8rem;
  padding-left: 0.8rem;
`;

const HistoryBackArrow = styled(MdKeyboardArrowLeft)`
  font-size:2rem;
`;

export default withRouter(LineHeader);
