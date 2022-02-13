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

export const CheckboxGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 1rem;

  label {
    padding-left: 1rem;
    color: ${(props) => props.theme.colors.text};
  }
`

export const Textarea = styled.textarea`
  max-width: 23.75rem;
  width: 100%;
  height: 10rem;
  padding: 1rem;
  font-family: ${(props) => props.theme.fonts.main};
  border-radius: 1.8rem;
  border: 2px solid transparent;
  outline: none;
  background: ${(props) => props.theme.colors.darkGrey};
  transition: all 0.2s;

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.grey};
  }

  :focus {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.grey};
    border-color: ${(props) => props.theme.colors.grey};
    cursor: text;
  }
`
