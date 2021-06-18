import { createGlobalStyle } from "styled-components";

export const GlobalStyles =  createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: black;
    color: #333333;
    font-size: 16px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;