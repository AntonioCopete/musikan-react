import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavigateLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.${(props) => props.activeClassName} {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const ButtonLink = styled.button`
  border: none;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  cursor: pointer;
  transition: color 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
