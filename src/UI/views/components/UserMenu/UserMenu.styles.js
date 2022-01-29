import styled from 'styled-components'

export const UserMenuNav = styled.nav`
  width: 20rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.darkGrey};
`

export const UserMenuElement = styled.li`
  cursor: pointer;
  padding: 1.5rem 0;

  & * {
    margin-left: 2rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`
