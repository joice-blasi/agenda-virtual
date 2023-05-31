import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--gray-100);
  font-size: 1.4rem;
  font-weight: 500;
  height: 4rem;
  width: 50%;
  max-width: 250px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: rgba(54,79,199, 0.7);
  }
`