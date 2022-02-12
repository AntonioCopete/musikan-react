import styled from 'styled-components'
import { NavigateLink } from '../../../styles/GlobalComponents/NavLink'

export const MenuWrapper = styled.nav`
  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    align-content: center;
    align-self: end;
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
  }
`

export const MenuList = styled.ul`
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 1rem;
  }
`

export const MenuItem = styled(NavigateLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;

  svg {
    margin: 0 1rem;
    font-size: 2rem;
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const BrandItem = styled(MenuItem)`
  /* @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  } */
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`

export const MenuName = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0.2rem;
  display: block;
  visibility: visible;

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25;
    visibility: hidden;
    text-transform: capitalize;
  }
`
