import styled from "styled-components";

export const StyledLoginForm = styled.section`
  display: flex;
  justify-content: center;
  
  .cont-form {
    background-color: var(--gray-0);
    width: 100%;
    min-width: 280px;
    max-width: 710px;
    margin: 3rem 2rem;
    padding: 2.5rem 1rem;
    border-radius: 8px;
  }

  h2 {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 1.8rem;
    font-weight: 600;
  }

  form {
    margin: 1rem;
  }

  .center {
    text-align: center;
    margin-top: 3rem;
  }

  .center > p {
    margin-top: 1.5rem;
    font-size: 1.3rem;
    font-weight: 400;
  }

  .center > p > .link {
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
  }
`