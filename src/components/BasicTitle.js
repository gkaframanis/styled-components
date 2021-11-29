import styled from "styled-components";


// Tagged template literal
// Instant setup of a React Component.
// Creates a unique class.
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
    /* color:${({special}) => special ? "red" : "blue"} */
  color: ${({special}) => special && "red"};
`;

export default BasicTitle;