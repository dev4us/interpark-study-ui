import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

// tslint:disable-next-line
const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
 @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700,900&display=swap&subset=korean');

  ${reset}
  html, body, #root{
    width:100%;
    height:100%;
    font-family: "Noto Sans KR", -apple-system, system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  *:focus{
    outline:none;
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: "Noto Sans KR", -apple-system, system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;
  }
  input, textarea, select, button{
    font-family: "Noto Sans KR", -apple-system, system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;
  }
  input,
  button{
    &.focus,
    &.active{outline:none}
  }
  .loaderFullWidth{
    display:flex;
    width:100%;
    height:300px;
    justify-content:center;
    align-items:center;
  }
`;

export default GlobalStyle;
