// Different approach instead of using the Wrapper inside the React component
// Better the approach used in ComplexTitle component.

import React from 'react';
import styled from "styled-components";
import {colors, setBorder} from "../utils";

// Styles are scoped to this specific styled component.
// We can target elements and classes
const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
  }
  
  .box {
    height: 10px;
    border: ${setBorder({width: 5, color: "red"})
  }
`;

const ComplexTitle = ({title, className}) => {
    return (
        <div className={className}>
            <h1>{title}</h1>
            <div className={"underline"}/>
            <div clallName={"box"}></div>
        </div>
    );
};

export default Wrapper;
