import styled from 'styled-components'

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  max-width: 23.75rem;
  width: 100%;
  height: 3.437rem;
  margin: 1rem 0;
  padding: 0 0.4rem;
  background-color: ${(props) => props.theme.colors.darkGrey};
  border-radius: 3.437rem;

  & i {
    text-align: center;
    line-height: 3.437rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.1rem;
  }

  & input {
    font-weight: 600;
    line-height: 1;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.text};
    border: none;
    outline: none;
    background: none;
    border-radius: inherit;
  }

  & input::placeholder {
    color: ${(props) => props.theme.colors.lightGrey};
    font-weight: 500;
  }
`
