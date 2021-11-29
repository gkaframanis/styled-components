// Create Global Styles out of the index.css file.
// We import it in the App.js file and we return it as first React element.

import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #645cff;
    --white: #fff;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f2f4f8;
  }

  .btn {
    background: #645cff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: capitalize;
    padding: 0.25rem;
    display: block;
    width: 200px;
    margin: 1rem auto;
  }
`;

export default GlobalStyles;