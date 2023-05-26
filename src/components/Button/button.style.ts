import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--gray-100);
  font-size: 1.5rem;
  font-weight: 500;
  height: 4rem;
  width: 50%;
  border-radius: 5px;
  border: none;

  :hover {
    background-color: rgba(54,79,199, 0.7);
  }
`