import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  button {
        border: 1px solid #49d69b;
        border-radius: 0.5rem;
        background: #49d69b;
        cursor: pointer;
        font-size: 1.25rem;
        line-height:1.7rem
  }
  input {
    border: none;
  }
  div{
    margin:0;
    padding:0;
  }
  a{
    text-decoration:none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color:black;
  }
  *{
    box-sizing:border-box;
  }
`;

export default GlobalStyles;
