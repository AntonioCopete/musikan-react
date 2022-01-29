import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s linear;

  &:hover {
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
