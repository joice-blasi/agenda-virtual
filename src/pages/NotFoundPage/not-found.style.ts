import styled from "styled-components";

export const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;

  .container {
    width: 100%;
    min-width: 280px;
    max-width: 710px;
    text-align: center;
    margin: 4rem 2rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 8rem;
    color: var(--primary);
    margin-bottom: 2rem;
  }

  .link {
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
  }
`