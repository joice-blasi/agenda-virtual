import styled from "styled-components"

export const StyledHeader = styled.div`
  height: 100px;
  background-color: var(--gray-100);
  display: flex;
  justify-content: center;
  
  .cont-header, .cont-logout {
    height: 100%;
    display: flex;
  }
  
  .cont-header {
    align-items: center;
    justify-content: center;
  }

  .cont-logout {
    padding: 0 5rem;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 600;
  }

  h1 > span {
    color: var(--primary);
  }

  .logout {
    cursor: pointer;
    width: 15px;
    height: 15px;
    color: var(--gray-700);
  }
`