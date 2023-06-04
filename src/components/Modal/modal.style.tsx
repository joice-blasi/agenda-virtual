import styled from "styled-components";

export const StyledModal = styled.div`
  top: 0;
  right: 0;
  background-color: rgba(134, 142, 150, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 650px;
    min-width: 270px;
    background-color: white;
    margin: 0 2rem;
    border-radius: 5px;
  }

  header {
    height: 40px;
    background-color: var(--gray-300);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  header > h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  header > .close {
    cursor: pointer;
    width: 15px;
    height: 15px;
    color: var(--gray-900);
  }
`