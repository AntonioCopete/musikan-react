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

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  font-family: Acme, sans-serif;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
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
