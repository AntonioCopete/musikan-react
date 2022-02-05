import styled from 'styled-components'

export const HiddenInput = styled.input`
  position: relative;
  width: 10vw;
  height: 10vh;
  opacity: 0;
  z-index: -1;

  /* &:focus {
    hover: true;
    cursor: pointer;
  } */
`

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 10%;
  left: 15%;
  width: 55vw;
  height: auto;
  background-color: ${({ theme }) =>
    theme ? theme.colors.background : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 20px;
  border: 3px solid red;

  &:before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    opacity: 0.5;
    border-radius: 5px;
  }

  @media (max-width: 700px) {
    width: 65vw;
    padding: 5rem;
  }
`
