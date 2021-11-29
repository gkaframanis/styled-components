// To get more user friendly class names.
import styled, {css} from "styled-components/macro";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  display: block;
  margin: 1rem auto;
  ${({large}) => large
          ? css`padding: 1rem;
            font-size: 1.5rem;
            font-weight: 700`
          : css`padding: 0.5rem;
            font-size: 1rem;
            font-weight: 400`}
`;

// Instead of using an HTML element, we can use a React Component
// We extend the DefaultButton and we use the unique properties we want.
export const HipsterButton = styled(DefaultButton)`
  width: 150px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;

  // Because one of the buttons is rendered as link using the as props with styled components.
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;