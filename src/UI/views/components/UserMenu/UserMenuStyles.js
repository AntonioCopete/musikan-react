import styled from 'styled-components'

export const UserMenuNav = styled.nav`
  position: absolute;
  top: 8rem;
  right: 5rem;
  background-color: ${(props) => props.theme.colors.darkGrey};
  width: 20rem;
  border-radius: 10px;
`

export const UserMenuElement = styled.li`
  cursor: pointer;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  & * {
    margin-left: 2rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`
