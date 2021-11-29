import React from 'react';
import styled from "styled-components";

const Card = () => {
    return (
        <StyledCard>
            <img src={"https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160"}
                 alt={"product"}/>
            <footer>
                <h4>Product Name</h4>
                <p>$15</p>
            </footer>
        </StyledCard>
    );
};

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;

  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    //&:hover {
    //  background: red;
    //}

    h4 {
      text-transform: capitalize;
      //::before {
      //  content: "Name: ";
      //  color: red;
      }
    }

    //h4:hover {
    //  color: green;
    //}

    p {
      color: var(--primary);
      font-weight: 700;
    }
  }

  transition: all 0.5s ease-in-out;

  //  hover for the styled component
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }


  @media (min-width: 768px) {
    max-width: 600px;
  }

`;

export default Card;
