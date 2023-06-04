import styled from "styled-components";

export const StyledListContacts = styled.div`
  background-color: var(--gray-0);
  border-radius: 8px;
  margin-bottom: 2rem;

  .add {
    display: flex;
    justify-content: center;
    padding: 1rem 1.2rem;
  }

  .add > h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 1.5rem;
  }

  .add > .add-contact {
    width: 12px;
    height: 12px;
    color: var(--gray - 900);
    cursor: pointer;
  }

  .empty {
    font-size: 1.3rem;
    font-weight: 400;
    text-align: center;
    padding-bottom: 1rem;
  }
`
