import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemWrapper = styled(Link)`
  display: block;
  width: 20rem;
  margin: 0 2rem;
`

export const ItemContent = styled.div`
  position: relative;
  width: inherit;
  height: 20rem;
  border-radius: 50%;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 13rem;
    height: 13rem;
  }
`

export const Footer = styled.footer`
  margin-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`
