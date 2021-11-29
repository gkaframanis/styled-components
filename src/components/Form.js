import React from 'react';
import styled, {css} from 'styled-components';

// Using attrs to set up some default attributes
// With the object syntax we can't access the props.
const Button = styled.button.attrs(props => {
    return {type: props.type || "button"}
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;

  ${({type}) => {
    return type === "submit" && css`
      display: block;
      width: 100%;
      margin-top: 1rem;
      border-radius: 0.25rem`
  }}
`;

const BasicInput = styled.input.attrs(props => {
    return {type: props.type || "text", placeholder: props.placeholder || "Please enter value"}
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

const Form = () => {
    return (
        <div>
            <h2>Some Random Stuff</h2>
            <Button>Click Me</Button>
            <form css={`width: 300px;
              background: #fff;
              padding: 2rem;
              margin-top: 1rem`}>
                <h2>Form</h2>
                <BasicInput type="email" placeholder={"Enter Email"}/>
                <BasicInput type="text"/>
                <BasicInput type="text"/>
                <Button>Submit here</Button>
            </form>
        </div>
    );
};

export default Form;
