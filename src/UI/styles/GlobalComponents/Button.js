import styled from 'styled-components'

export const Button = styled.button`
  max-width: 23.75rem;
  width: 100%;
  height: 4rem;
  margin: 1rem 0;
  font-weight: 600;
  border-radius: 3.0625rem;
  border: ${(props) =>
    props.primary ? 'none' : `2px solid ${props.theme.colors.text}`};
  outline: none;
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.colors.primaryDark
        : props.theme.colors.primaryLight};
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const SquaredButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`
