import styled from "styled-components";

export const StyledModalError = styled.div`
  padding: 2rem 1.5rem;
  
  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin: 1rem 0;
    text-align: center;
  }

  .cont-button {
    text-align: center;
  }

  .button-back {
    margin-top: 1.5rem;
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
  }
`