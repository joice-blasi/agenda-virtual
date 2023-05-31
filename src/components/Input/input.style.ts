import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label, input::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
  }

  input {
    height: 4rem;
    width: 100%;
    max-width: 630px;
    background-color: var(--gray-300);
    border: none;
    border-radius: 5px;
    padding-left: 1.2rem;
  }

  p {
    color: var(--alert-error);
    font-size: 1.1rem;
  }
`