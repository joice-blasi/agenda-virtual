import styled from "styled-components";

export const StyledIdentification = styled.section`
  background-color: var(--gray-0);
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 1rem 1.2rem;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
  }

  .cont-data-buttons {
    display: flex;
    justify-content: space-between;
  }

  .user-data {
    font-size: 1.3rem;
    font-weight: 400;
    width: 80%;
  }

  .cont-1 > p, .cont-2 > p {
    margin-bottom: 0.8rem;
  }

  .section-buttons {
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .edit, .delete {
    cursor: pointer;
    width: 15px;
    height: 15px;
    color: var(--gray-700);
  }

  @media(min-width: 600px) {
    .user-data {
      width: 70%;
      display: flex;
      justify-content: space-between;
    }
  }
`