import styled from 'styled-components'

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  place-content: center;
  max-width: 23.75rem;
  width: 100%;
  height: 3.437rem;
  margin: 1rem 0;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors.darkGrey};
  border-radius: 3.437rem;

  & svg {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.1rem;
    justify-self: center;
  }

  & input {
    font-weight: 600;
    line-height: 1;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.text};
    border: none;
    outline: none;
    background: none;
  }

  & input::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
    font-weight: 500;
  }

  & select {
    appearance: none;
    border: none;
    width: fit-content;
    background-color: ${(props) => props.theme.colors.darkGrey};
    color: ${(props) => props.theme.colors.text};
    font-size: 1.1rem;

    &:focus {
      outline: none;
    }
  }
`
