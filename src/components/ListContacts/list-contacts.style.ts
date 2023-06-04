import styled from "styled-components";

export const StyledListContacts = styled.div`
  background-color: var(--gray-0);
  border-radius: 8px;
  margin-bottom: 2rem;
  padding-bottom: 1rem;

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
  
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .empty {
    font-size: 1.3rem;
    font-weight: 400;
    text-align: center;
    padding: 4rem 0;
  }
`
