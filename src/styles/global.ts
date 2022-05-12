import { createGlobalStyle } from "styled-components";
import bodyBackground from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`

@media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }

:root{
    --background: #fafafa;
    --search-button:#3982ff;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-family: 'Roboto', sans-serif;
}

body{
    background:url(${bodyBackground}) center / cover no-repeat ;
    min-height:100vh ;
    ---webkit-font-smoothing: antialiased;

    &.lockScroll {
      max-height: 100vh;
      overflow: hidden;
    }
}

body,input,textarea, button{
    font-size: 'Roboto', sans-serif;
    font-weight: 400;
} 

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }

[disabled]{
    cursor: not-allowed;
}

&::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--gray-300);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: rgba(0,0,0,0.05);
  }
  @media (max-width: 425px) {
    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-track {
      display: none;
    }
  }

`;
