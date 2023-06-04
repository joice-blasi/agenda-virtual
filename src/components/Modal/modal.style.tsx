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
    max-width: 750px;
    min-width: 270px;
    background-color: white;
    margin: 0 2rem;
  }
`