import styled from "styled-components"

export const StyledHeader = styled.div`
  height: 100px;
  width: 100%;
  background-color: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.6rem;
    font-weight: 600;
  }

  h1 > span {
    color: var(--primary);
  }
`