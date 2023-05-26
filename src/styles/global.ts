import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
      width: 100vw;
      height: 100vh;
    }

    ul, ol, li {
        list-style: none;
    }

    input {
        outline: none;
    }

  :root {
    --primary: #364FC7;
    --gray-900: #1E1E1E;
    --gray-700: #495057;
    --gray-500: #868E96;
    --gray-300: #DEE2E6;
    --gray-100: #F1F3F5;
    --gray-0: #F8F9FA;

    font-size: 60%;
  }

  @media(min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  h1, h2, h3, h4, h5, h6, p, a, span, li, button, input {
    font-family: "IBM Plex Sans", sans-serif;
    color: var(--gray-900)
  }
`