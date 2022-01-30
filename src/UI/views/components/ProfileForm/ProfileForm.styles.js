import styled from 'styled-components'

export const SectionTitle = styled.h4`
  color: ${(props) => props.theme.colors.text};
`

export const Input = styled.input`
  // RESET:
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  width: 20rem;
  line-height: 3rem;
  background-color: ${(props) => props.theme.colors.darkGrey};
  color: #969696; // TEMPORARY COLOR, PENDING THEME
  text-align: center;
  border-radius: 20px;
  margin: 1rem;
`

export const SaveButton = styled.button`
  // RESET:
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  padding: 1rem;
  width: 10rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  cursor: pointer;
`

export const CancelButton = styled.button`
  // RESET:
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
`
