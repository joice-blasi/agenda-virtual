import styled from "styled-components";

export const StyledCard = styled.li`
  margin: 1rem 2rem;
  padding: 1.5rem;
  background-color: var(--gray-100);
  border-radius: 5px;
  width: auto;
  min-width: 170px;
  

  .contact-data {
    width: 70%;
  }

  .contact-data > p {
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  .contact-buttons {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .edit-user, .delete-user {
    cursor: pointer;
    width: 15px;
    height: 15px;
    color: var(--gray-700);
  }

  @media (min-width: 380px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 250px;

    .contact-buttons {
      flex-direction: column;
      justify-content: end;
      margin-bottom: 0.5rem;
    }
  }
`