import React from 'react';
import styled from "styled-components";

// Styles are scoped to this specific styled component.
// We can target elements and classes
// The styles for the wrapper are more specific than the global ones.
const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
  }
`;

const ComplexTitle = ({title}) => {
    return (
        // Using the global class
        <Wrapper className={"bg-grey"}>
            <h1>{title}</h1>
            <div className={"underline"}/>
        </Wrapper>
    );
};

export default ComplexTitle;
